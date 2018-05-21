import {Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnInit, Inject} from '@angular/core';
import {CodeEditorComponent} from '../code-editor.component';
import {RScriptDict} from '../../../storage/storage-provider.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResultTypes} from '../../../operators/result-type.model';
import {WaveValidators} from '../../form.validators';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'wave-code-editor-overlay',
    templateUrl: 'code-editor-overlay.component.html',
    styleUrls: ['code-editor-overlay.style.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditorOverlayComponent implements AfterViewInit, OnInit {

    form: FormGroup;

    @ViewChild(CodeEditorComponent) editor: CodeEditorComponent;

    constructor(formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) private data) {
        this.form = formBuilder.group({
            code: [this.data.code, Validators.required],
            resultType: [this.data.resultType, Validators.required],
        });
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.editor.setHeight('80vh');
            this.editor.refresh();
        });
    }
}
