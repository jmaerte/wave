import {Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnInit, Inject, Output, EventEmitter, Input} from '@angular/core';
import {CodeEditorComponent} from '../code-editor.component';
import {RScriptDict} from '../../../storage/storage-provider.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResultTypes} from '../../../operators/result-type.model';
import {WaveValidators} from '../../form.validators';
import {MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {LayoutService} from '../../../layout.service';
import {Operator} from '../../../operators/operator.model';
import {CopyClipboardDirective} from './copy-clipboard.directive';

export interface CodeSetup {
    code: string;
    name: string;
    lineLayers: Array<Operator>;
    pointLayers: Array<Operator>;
    polygonLayers: Array<Operator>;
    rasterLayers: Array<Operator>;
}

@Component({
    selector: 'wave-code-layer-selector',
    template: `
        <mat-expansion-panel *ngIf="list?.length > 0">
            <mat-expansion-panel-header>
                <mat-panel-title>
                    <mat-icon>reply</mat-icon>
                    {{type}}:
                </mat-panel-title>
                <mat-panel-description>Import {{type}} into your R Code.</mat-panel-description>
            </mat-expansion-panel-header>
            <mat-card-content>
                <table style="min-width: 100%">
                    <tr *ngFor="let op of list; let i = index" fxLayout="row" fxLayoutAlign="space-between center">
                        {{op.name}}
                        <button mat-button color="primary"
                            mat-tooltip="Copy to Clipboard."
                            [copytext]="'mapping.load' + codeQualifier + '(' + i + ', mapping.qrect)'">
                            <mat-icon>filter_none</mat-icon>
                        </button>
                    </tr>
                </table>
            </mat-card-content>
        </mat-expansion-panel>`,
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeLayerSelectorComponent {

    @Input() type: string;
    @Input() list: Array<Operator>;
    @Input() codeQualifier: string;

    constructor(private snackBar: MatSnackBar) {
    }

    copy(i: number) {
        this.snackBar.open('Copied to Clipboard.', '', {
            duration: 2000,
        });
    }
}
