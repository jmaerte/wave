import { NgModule } from '@angular/core';

import { CopyClipboardDirective } from './copy-clipboard.directive';

@NgModule({
    declarations: [
        CopyClipboardDirective
    ],
    exports: [
        CopyClipboardDirective
    ]
})
export class CopyClipboardModule {}
