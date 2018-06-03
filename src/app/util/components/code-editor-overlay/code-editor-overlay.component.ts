import {Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnInit, Inject} from '@angular/core';
import {CodeEditorComponent} from '../code-editor.component';
import {RScriptDict} from '../../../storage/storage-provider.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResultTypes} from '../../../operators/result-type.model';
import {WaveValidators} from '../../form.validators';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ReplaySubject} from 'rxjs';
import {LayoutService} from '../../../layout.service';

@Component({
    selector: 'wave-code-editor-overlay',
    templateUrl: 'code-editor-overlay.component.html',
    styleUrls: ['code-editor-overlay.style.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(window:resize)': 'onResize($event)'
    }
})
export class CodeEditorOverlayComponent implements AfterViewInit, OnInit {

    form: FormGroup;
    maxHeight$ = new ReplaySubject<number>(1);
    name: string;

    @ViewChild(CodeEditorComponent) editor: CodeEditorComponent;

    constructor(formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) private data) {
        this.form = formBuilder.group({
            code: [this.data.code, Validators.required],
            resultType: [this.data.resultType, Validators.required],
        });
        this.name = data.name;
    }

    ngOnInit() {
        this.maxHeight$.subscribe(val => {
            this.editor.setHeight(val + 'px');
            this.editor.refresh();
        });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.maxHeight$.next(window.innerHeight - 2 * LayoutService.remInPx() - LayoutService.getToolbarHeightPx());
        });
    }

    onResize(event: Event) {
        console.log(event);
        setTimeout(() => {
            this.maxHeight$.next(window.innerHeight - 2 * LayoutService.remInPx() - LayoutService.getToolbarHeightPx());
        });
    }
}
