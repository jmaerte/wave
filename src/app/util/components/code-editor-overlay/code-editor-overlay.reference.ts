import {OverlayRef} from '@angular/cdk/overlay';

export class CodeEditorOverlayRef {

    constructor(private overlayRef: OverlayRef) {}

    dispose(): void {
        this.overlayRef.dispose();
    }

}
