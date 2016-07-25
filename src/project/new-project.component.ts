import {Component, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core';
import {COMMON_DIRECTIVES, Validators, FormBuilder, ControlGroup, Control} from '@angular/common';

import {Observable, BehaviorSubject, Subscription} from 'rxjs/Rx';

import {MATERIAL_DIRECTIVES} from 'ng2-material';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';

import Config from '../app/config.model';

import {DefaultBasicDialog} from '../dialogs/basic-dialog.component';

import {ProjectService} from '../project/project.service';
import {LayerService} from '../layers/layer.service';
import {PlotService} from '../plots/plot.service';
import {StorageService} from '../storage/storage.service';

import {Project} from '../project/project.model';
import {Projections} from '../operators/projection.model';

import moment from 'moment';

@Component({
    selector: 'wave-new-project-dialog',
    template: `
    <form [ngFormModel]="form">
        <md-input placeholder="Name" ngControl="name">
            <md-hint align="end" *ngIf="form.controls.name.errors?.required"
            >The name must be non-empty.</md-hint>
            <md-hint align="end" *ngIf="nameInUsage$ | async"
            >The name is already in use.</md-hint>
        </md-input>
        <md-progress-circle mode="indeterminate" *ngIf="nameLoading$ | async"></md-progress-circle>
        <p>Set the projection for reviewing and exporting:</p>
        <div class="select">
            <label>Projection</label>
            <select ngControl="projection">
                <option *ngFor="let projection of Projections.ALL_PROJECTIONS"
                        [ngValue]="projection"
                >{{projection}}</option>
            </select>
        </div>
        <p>This will be the visible timestamp:</p>
        <md-input placeholder="Date/Time" ngControl="time">
            <md-hint align="end" [class.no-error]="!form.controls.time.errors?.invalidTime"
            >YYYY-MM-DDTHH:mm:ss</md-hint>
        </md-input>
    </form>
    `,
    styles: [`
    form {
        padding-top: 16px;
    }
    md-input {
        width: 100%;
    }
    md-hint {
        color: ${Config.COLORS.WARN};
    }
    md-hint.no-error {
        color: ${Config.COLORS.TEXT.DEFAULT};
    }
    div.select {
        margin-top: 25px;
    }
    label {
        display: block;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.38);
    }
    md-progress-circle {
        position: absolute;
        margin-top: -34px;
        right: 30px;
        width: 19px;
        height: 19px;
    }
    `],
    directives: [
        COMMON_DIRECTIVES, MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_PROGRESS_CIRCLE_DIRECTIVES,
    ],
    pipes: [],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class NewProjectDialogComponent extends DefaultBasicDialog implements OnInit, OnDestroy {
    // make it available for template
    Projections = Projections; // tslint:disable-line:variable-name

    form: ControlGroup;

    nameInUsage$: Observable<boolean>;
    nameLoading$ = new BehaviorSubject<boolean>(false);

    private subscriptions: Array<Subscription> = [];

    constructor(
        private projectService: ProjectService,
        private storageService: StorageService,
        private layerService: LayerService,
        private plotService: PlotService,
        private formBuilder: FormBuilder
    ) {
        super();

        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            projection: [Projections.WGS_84, Validators.required],
            time: [moment().toISOString(), Validators.compose([
                Validators.required,
                (control: Control) => {
                    const parsedTimestamp = moment(control.value, moment.ISO_8601);
                    // tslint:disable-next-line:no-null-keyword
                    return parsedTimestamp.isValid() ? null : {'invalidTime': true};
                },
            ])],
        });

        this.nameInUsage$ = this.form.controls['name'].valueChanges.debounceTime(
            Config.DELAYS.DEBOUNCE
        ).filter(
            value => value.length > 0
        ).switchMap(value => {
            this.nameLoading$.next(true);
            const promise = this.storageService.projectExists(value);
            this.subscriptions.push(
                Observable.merge(
                    promise,
                    Observable.timer(Config.DELAYS.LOADING.MIN)
                ).last().subscribe(
                    _ => this.nameLoading$.next(false)
                )
            );
            return promise;
        });
    }

    ngOnInit() {
        this.dialog.setTitle('New Project');

        const newButtonDisabled = new BehaviorSubject<boolean>(true);
        this.subscriptions.push(
            Observable.combineLatest(
                this.form.statusChanges.map(
                    status => status === 'INVALID'
                ),
                this.nameInUsage$,
                (invalid, inUsage) => invalid || inUsage
            ).subscribe(
                newButtonDisabled
            )
        );

        this.dialog.setButtons([
            {
                title: 'New',
                class: 'md-primary',
                action: () => this.newAndSwitch(),
                disabled: newButtonDisabled,
            },
            { title: 'Cancel', action: () => this.dialog.close() },
        ]);
    }

    ngOnDestroy() {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

    newAndSwitch() {
        this.projectService.setProject(
            new Project({
                name: this.form.controls['name'].value,
                projection: this.form.controls['projection'].value,
                time: moment(this.form.controls['time'].value, moment.ISO_8601),
            })
        );
        this.layerService.setLayers([]);
        this.plotService.setPlots([]);

        this.dialog.close();
    }

}