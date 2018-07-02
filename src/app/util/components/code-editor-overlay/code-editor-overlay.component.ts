import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    AfterViewInit,
    OnInit,
    Inject,
    Output,
    EventEmitter,
    ChangeDetectorRef
} from '@angular/core';
import {CodeEditorComponent} from '../code-editor.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatSidenav} from '@angular/material';
import {LayoutService} from '../../../layout.service';
import {Operator} from '../../../operators/operator.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {SidenavRef} from '../../../sidenav/sidenav-ref.service';

export interface CodeSetup {
    code: string;
    name: string;
    lineLayers: Array<Operator>;
    pointLayers: Array<Operator>;
    polygonLayers: Array<Operator>;
    rasterLayers: Array<Operator>;
}

@Component({
    selector: 'wave-code-editor-overlay',
    templateUrl: 'code-editor-overlay.component.html',
    styleUrls: ['code-editor-overlay.style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(window:resize)': 'onResize($event)'
    }
})
export class CodeEditorOverlayComponent implements AfterViewInit, OnInit {

    form: FormGroup;
    maxHeight$ = new BehaviorSubject<string>('unset');
    editorHeight$ = new BehaviorSubject<string>('unset');
    maxWidth$ = new BehaviorSubject<string>('unset');
    name: string;

    matTabLableHeight = 48; // Is needed to make the lower toolbar as high as the mat tab labels.

    @ViewChild(CodeEditorComponent) editor: CodeEditorComponent;
    @ViewChild('scroll') scrollContainer: HTMLDivElement;
    @ViewChild('sidenav') sidenav: MatSidenav;

    @Output() code: EventEmitter<string> = new EventEmitter<string>();

    constructor(formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) private data: CodeSetup,
                private changeDetector: ChangeDetectorRef) {
        this.form = formBuilder.group({
            code: [this.data.code, Validators.required],
        });
        this.name = data.name;
    }

    ngOnInit() {
        this.editorHeight$.subscribe(val => {
            setTimeout(() => {
                this.editor.setHeight(val);
                this.editor.refresh();
            });
        });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.onResize(null);
        });
        this.sidenav.onOpen.subscribe(() => {
            this.maxWidth$.next(window.innerWidth - this.sidenav._width + 'px')
        });
        this.sidenav.onClose.subscribe(() => {
            this.maxWidth$.next(window.innerWidth + 'px');
        });
    }

    onResize(event: Event) {
        setTimeout(() => {
            this.maxHeight$.next(window.innerHeight - LayoutService.getToolbarHeightPx() + 'px');
            this.editorHeight$.next(window.innerHeight - LayoutService.getToolbarHeightPx() - this.matTabLableHeight + 'px');
            this.maxWidth$.next(window.innerWidth - (this.sidenav.opened ? this.sidenav._width : 0) + 'px');
            this.changeDetector.detectChanges();
        });
    }

    minimize() {
        this.code.emit(this.editor.getCode());
    }
}
