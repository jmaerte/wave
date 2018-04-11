import {Injectable} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {CodeEditorOverlayComponent} from './code-editor-overlay.component';
import {CodeEditorOverlayRef} from './code-editor-overlay.reference';

interface CodeEditorConfig {
    hasBackdrop?: boolean,
    backdropClass?: string,
    panelClass?: string,
}

const DEFAULT_CONFIG: CodeEditorConfig = {
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-dark-backdrop',
    panelClass: 'code-editor-dialog-panel',
};

@Injectable()
export class CodeEditorOverlayService {

    constructor(private overlay: Overlay) {}

    private overlayConfig(config: CodeEditorConfig): OverlayConfig {
        const positioning = this.overlay.position().global().centerHorizontally().centerVertically();

        return new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positioning,
            width: '95%',
            height: '95%',
            minWidth: '95%',
            minHeight: '95%',
        });
    }

    private overlayRef(config: CodeEditorConfig): OverlayRef {
        return this.overlay.create(this.overlayConfig(config));
    }

    open(config: CodeEditorConfig = {}): CodeEditorOverlayRef {
        const cfg = {... DEFAULT_CONFIG, ...config};
        const ref = this.overlayRef(cfg);
        const portal = new ComponentPortal(CodeEditorOverlayComponent);

        ref.attach(portal);

        const codeRef = new CodeEditorOverlayRef(ref);

        ref.backdropClick().subscribe(() => codeRef.dispose());

        return codeRef;
    }
}
