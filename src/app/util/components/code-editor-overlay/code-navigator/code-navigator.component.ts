import {
    Component,
    ChangeDetectionStrategy,
    Input, EventEmitter, Output
} from '@angular/core';
import {MatSidenav} from '@angular/material';


@Component({
    selector: 'wave-code-navigator',
    template: `
        <div fxLayout="row" fxLayoutGap="1rem" fxLayoutAlign="end center">
            <button fxFlex mat-raised-button (click)="sidenav.open()">
                <mat-icon>build</mat-icon>
            </button>
            <button fxFlex mat-raised-button (click)="close.emit(true)">
                <mat-icon>fullscreen_exit</mat-icon>
            </button>
        </div>
    `,
    styles: [`
        button {
            display: block;
            padding: 0;
            line-height: 100%;

            min-width: 48px;
            width: 48px;
            max-width: 48px;
            min-height: 48px;
            height: 48px;
            max-height: 48px;

        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeNavigatorComponent {

    @Input() sidenav: MatSidenav;
    @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>()
}
