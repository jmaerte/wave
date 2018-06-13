import {Directive, HostListener, Input} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Directive({
    selector: '[copytext]',
})
export class CopyClipboardDirective {

    @Input() copytext: string;

    constructor(private snackBar: MatSnackBar) {}

    @HostListener('click') copyToClipboard() {
        let textArea = document.createElement('textarea');
        textArea.style.position = 'fixed';
        textArea.style.top = '-999px';
        textArea.style.left = '-999px';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';

        textArea.value = this.copytext;
        document.body.appendChild(textArea);

        textArea.select();

        try {
            let copied = document.execCommand('copy');
            if (copied) {
                this.snackBar.open('Copied to clipboard.', '', {
                    duration: 2000,
                });
            } else {
                this.snackBar.open('Failed to copy to clipboard.', '', {
                    duration: 2000,
                });
            }
        } catch (err) {
            this.snackBar.open('Failed to copy to clipboard.', '', {
                duration: 2000,
            });
        }
    }

}
