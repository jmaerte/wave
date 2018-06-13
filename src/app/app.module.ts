import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import 'hammerjs';

import {AppComponent} from './app.component';
import {RasterRepositoryComponent} from './operators/dialogs/raster-repository/raster-repository.component';
import {MapComponent} from './map/map.component';
import {
    OlLineLayerComponent,
    OlPointLayerComponent,
    OlPolygonLayerComponent,
    OlRasterLayerComponent,
} from './map/map-layer.component';
import {NbspPipe, ProvenanceListComponent} from './provenance/provenance-list/provenance-list.component';
import {SidenavContainerComponent} from './sidenav/sidenav-container/sidenav-container.component';
import {AbcdRepositoryComponent} from './operators/dialogs/abcd-repository/abcd-repository.component';
import {CssStringToRgbaPipe} from './util/pipes/css-string-to-rgba.pipe';
import {RgbaToCssStringPipe} from './util/pipes/rgba-to-css-string.pipe';
import {BreakpointToCssStringPipe} from './util/pipes/breakpoint-to-css-string.pipe';
import {SymbologyPointsComponent} from './layers/symbology/symbology-vectors/symbology-points.component';
import {SymbologyVectorComponent} from './layers/symbology/symbology-vectors/symbology-vector.component';
import {SymbologyRasterComponent} from './layers/symbology/symbology-raster/symbology-raster.component';
import {CodeEditorComponent} from './util/components/code-editor.component';
import {DragulaService} from 'ng2-dragula/components/dragula.provider';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';
import {LegendComponent} from './layers/legend/legend.component';
import {LegendaryPointComponent} from './layers/legend/legend-point/legend-point.component';
import {LegendaryClusteredPointComponent} from './layers/legend/legend-point/legend-point-cluster.component';
import {LegendaryRasterComponent} from './layers/legend/legend-raster/legend-raster.component';
import {LegendaryMappingColorizerRasterComponent} from './layers/legend/legend-raster/legend-raster-mapping-colorizer.component';
import {LegendaryVectorComponent} from './layers/legend/legend-vector/legend-vector.component';
import {MappingQueryService} from './queries/mapping-query.service';
import {UserService} from './users/user.service';
import {GFBioLogoComponent, IdessaLogoComponent, VatLogoComponent} from './logo.component';
import {MappingDataSourceFilter} from './util/pipes/mapping-data-sources.pipe';
import {HighlightPipe} from './util/pipes/highlight.pipe';
import {BasketResultGroupByDatasetPipe} from './operators/dialogs/baskets/gfbio-basket.pipe';
import {TrimPipe} from './util/pipes/trim.pipe';
import {SafeStylePipe} from './util/pipes/safe-style.pipe';
import {SafeHtmlPipe} from './util/pipes/safe-html.pipe';
import {MappingColorizerToGradientPipe} from './util/pipes/mapping-colorizer-to-gradient.pipe';
import {ProjectService} from './project/project.service';
import {LayerService} from './layers/layer.service';
import {LayoutService} from './layout.service';
import {StorageService} from './storage/storage.service';
import {RandomColorService} from './util/services/random-color.service';
import {MapService} from './map/map.service';
import {NotificationService} from './notification.service';
import {GfbioBasketsComponent} from './operators/dialogs/baskets/gfbio-baskets.component';
import {PointInPolygonFilterOperatorComponent} from './operators/dialogs/point-in-polygon-filter/point-in-polygon-filter.component';
import {DialogHeaderComponent} from './dialogs/dialog-header/dialog-header.component';
import {NumericAttributeFilterOperatorComponent} from './operators/dialogs/numeric-attribute-filter/numeric-attribute-filter.component';
import {HistogramComponent} from './plots/histogram.component';
import {DialogSectionHeadingComponent} from './dialogs/dialog-section-heading/dialog-section-heading.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RenameLayerComponent} from './layers/dialogs/rename-layer.component';
import {LayerSelectionComponent} from './operators/dialogs/helpers/layer-selection/layer-selection.component';
import {OperatorOutputNameComponent} from './operators/dialogs/helpers/operator-output-name/operator-output-name.component';
import {MultiLayerSelectionComponent} from './operators/dialogs/helpers/multi-layer-selection/multi-layer-selection.component';
import {ReprojectionSelectionComponent} from './operators/dialogs/helpers/reprojection-selection/reprojection-selection.component';
import {RasterValueExtractionOperatorComponent} from './operators/dialogs/raster-value-extraction/raster-value-extraction.component';
import {LayerListComponent} from './layers/layer-list/layer-list.component';
import {SmallTimeInteractionComponent} from './time/small-time-interaction/small-time-interaction.component';
import {TimeConfigComponent} from './time/time-config/time-config.component';
import {ExpressionOperatorComponent} from './operators/dialogs/expression-operator/expression-operator.component';
import {HistogramOperatorComponent} from './operators/dialogs/histogram-operator/histogram-operator.component';
import {GbifOperatorComponent} from './operators/dialogs/gbif-operator/gbif-operator.component';
import {Config} from './config.service';
import {SidenavRef} from './sidenav/sidenav-ref.service';
import {SidenavHeaderComponent} from './sidenav/sidenav-header/sidenav-header.component';
import {NavigationComponent} from './sidenav/navigation/navigation.component';
import {SourceOperatorListComponent} from './operators/dialogs/source-operator-list/source-operator-list.component';
import {IfGfbioDirective} from './util/directives/if-gfbio.directive';
import {IfGfbioLoggedInDirective} from './util/directives/if-gfbio-logged-in.directive';
import {IfLoggedInDirective} from './util/directives/if-logged-in.directive';
import {IfGuestDirective} from './util/directives/if-guest.directive';
import {LoginComponent} from './users/login/login.component';
import {PlotListComponent} from './plots/plot-list/plot-list.component';
import {SplashDialogComponent} from './dialogs/splash-dialog/splash-dialog.component';
import {HelpComponent} from './help/help.component';
import {PlotDetailViewComponent} from './plots/plot-detail-view/plot-detail-view.component';
import {CsvPropertiesService} from './operators/dialogs/csv/csv-dialog/csv.properties.service';
import {CsvUploadComponent} from './operators/dialogs/csv/csv-upload/csv-upload.component';
import {
    CsvDialogComponent,
    CsvErrorDialog
} from './operators/dialogs/csv/csv-dialog/csv-dialog.component';
import {FeaturedbSourceListComponent} from './operators/dialogs/featuredb-source-list/featuredb-source-list.component';
import {WorkspaceSettingsComponent} from './project/workspace-settings/workspace-settings.component';
import {RasterIconComponent} from './raster-icon/raster-icon.component';
import {LineageGraphComponent} from './provenance/lineage-graph/lineage-graph.component';
import {LayerExportComponent} from './layers/dialogs/layer-export/layer-export.component';
import {ChangeProjectionComponent} from './project/change-projection/change-projection.component';
import {NewProjectComponent} from './project/new-project/new-project.component';
import {LoadProjectComponent} from './project/load-project/load-project.component';
import {SaveProjectAsComponent} from './project/save-project-as/save-project-as.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {OperatorListComponent} from './operators/dialogs/operator-list/operator-list.component';
import {SidenavSearchComponent, SidenavSearchRightDirective} from './sidenav/sidenav-search/sidenav-search.component';
import {ROperatorComponent} from './operators/dialogs/r/r-operator/r-operator.component';
import {TimeInputComponent} from './time/time-input/time-input.component';
import {RScriptSaveComponent} from './operators/dialogs/r/r-script-save/r-script-save.component';
import {RScriptLoadComponent} from './operators/dialogs/r/r-script-load/r-script-load.component';
import {CsvPropertiesComponent} from './operators/dialogs/csv/csv-config/csv-properties/csv-properties.component';
import {CsvTableComponent} from './operators/dialogs/csv/csv-config/csv-table/csv-table.component';
import {PieChartComponent} from './operators/dialogs/pie-chart-operator/pie-chart-operator.component';
import {ScatterPlotComponent} from './operators/dialogs/scatter-plot-operator/scatter-plot-operator.component';
import {RouterModule} from '@angular/router';
import {
    WorkflowParameterChoiceDialogComponent
} from './project/workflow-parameter-choice-dialog/workflow-parameter-choice-dialog.component';
import {LayerShareComponent} from './layers/dialogs/layer-share/layer-share.component';
import {TableComponent} from './datatable/table/table.component';
import {MediaviewComponent} from './datatable/mediaview/mediaview.component';
import {MediaviewImageComponent} from './datatable/mediaview/image/mediaview.image.component';
import {MediaviewImageDialogComponent} from './datatable/mediaview/image-dialog/mediaview.image-dialog.component';
import {MediaviewAudioComponent} from './datatable/mediaview/audio/mediaview.audio.component';
import {MediaviewVideoComponent} from './datatable/mediaview/video/mediaview.video.component';
import {MediaviewPlaylistComponent} from './datatable/mediaview/playlist/mediaview.playlist.component';
import {FileNamePipe} from './datatable/mediaview/filename.pipe';
import {TextualAttributeFilterOperatorComponent} from './operators/dialogs/textual-attribute-filter/textual-attribute-filter.component';
import {NumericPipe} from './operators/dialogs/scatter-plot-operator/scatter-plot-operator.pipe';
import {
    GroupedAbcdBasketResultComponent
} from './operators/dialogs/baskets/grouped-abcd-basket-result/grouped-abcd-basket-result.component';
import {PangaeaBasketResultComponent} from './operators/dialogs/baskets/pangaea-basket-result/pangaea-basket-result.component';
import {MatIconRegistry} from '@angular/material';
import {SourceDatasetComponent} from './operators/dialogs/raster-repository/source-dataset.component';
import {FeedbackComponent} from './help/feedback/feedback.component';
import {BoxPlotComponent} from './operators/dialogs/box-plot-operator/box-plot-operator.component';
import {RasterPolygonClipOperatorComponent} from './operators/dialogs/raster-polygon-clip/raster-polygon-clip.component';
import {IfGeoBonDirective} from './util/directives/if-geobon.directive';
import {OlDrawFeaturesComponent} from './operators/dialogs/draw-features/ol-draw-features.component';
import {CountryPolygonSelectionComponent} from './operators/dialogs/country-polygon-selection/country-polygon-selection.component';
import {HttpModule} from '@angular/http';
import {CodeEditorOverlayComponent} from './util/components/code-editor-overlay/code-editor-overlay.component';
import { ZoomHandlesComponent } from './map/zoom-handles/zoom-handles.component';
import {SymbologyEditorComponent} from './layers/symbology/symbology-editor/symbology-editor.component';
import {SymbologyRasterMappingColorizerComponent} from './layers/symbology/symbology-raster/symbology-raster-mapping-colorizer.component';
import {ColorizerEditorComponent} from './layers/symbology/symbology-raster/colorizer-editor.component';
import {HeatmapOperatorComponent} from './operators/dialogs/heatmap/heatmap.component';
import {RQuickHelpComponent} from './operators/dialogs/r/r-quick-help/r-quick-help.component';
import {CodeLayerSelectorComponent} from './util/components/code-editor-overlay/code-layer-selector.component';
import {CopyClipboardDirective} from './util/components/code-editor-overlay/copy-clipboard.directive';
import {CopyClipboardModule} from './util/components/code-editor-overlay/copy-clipboard.module';

export function configInitializer(config: Config) {
    return () => config.load();
}

@NgModule({
    declarations: [
        AppComponent,
        RasterRepositoryComponent,
        MapComponent,
        OlPointLayerComponent,
        OlLineLayerComponent,
        OlRasterLayerComponent,
        OlPolygonLayerComponent,
        ProvenanceListComponent,
        SidenavContainerComponent,
        AbcdRepositoryComponent,
        RgbaToCssStringPipe,
        CssStringToRgbaPipe,
        BreakpointToCssStringPipe,
        SymbologyPointsComponent,
        SymbologyRasterComponent,
        SymbologyRasterMappingColorizerComponent,
        SymbologyVectorComponent,
        NbspPipe,
        ReprojectionSelectionComponent,
        OperatorOutputNameComponent,
        CodeEditorComponent,
        LegendComponent,
        LegendaryPointComponent,
        LegendaryRasterComponent,
        LegendaryVectorComponent,
        LegendaryMappingColorizerRasterComponent,
        LegendaryClusteredPointComponent,
        VatLogoComponent,
        GFBioLogoComponent,
        IdessaLogoComponent,
        MappingDataSourceFilter,
        HighlightPipe,
        BasketResultGroupByDatasetPipe,
        TrimPipe,
        PangaeaBasketResultComponent,
        GroupedAbcdBasketResultComponent,
        SafeStylePipe,
        SafeHtmlPipe,
        MappingColorizerToGradientPipe,
        GfbioBasketsComponent,
        HistogramComponent,
        PointInPolygonFilterOperatorComponent,
        NumericAttributeFilterOperatorComponent,
        TextualAttributeFilterOperatorComponent,
        DialogHeaderComponent,
        DialogSectionHeadingComponent,
        RenameLayerComponent,
        LayerSelectionComponent,
        OperatorOutputNameComponent,
        MultiLayerSelectionComponent,
        ReprojectionSelectionComponent,
        RasterValueExtractionOperatorComponent,
        SmallTimeInteractionComponent,
        LayerListComponent,
        TimeConfigComponent,
        ExpressionOperatorComponent,
        HistogramOperatorComponent,
        GbifOperatorComponent,
        SidenavHeaderComponent,
        NavigationComponent,
        SourceOperatorListComponent,
        IfGfbioDirective,
        IfGfbioLoggedInDirective,
        IfGeoBonDirective,
        IfLoggedInDirective,
        IfGuestDirective,
        LoginComponent,
        PlotListComponent,
        SplashDialogComponent,
        HelpComponent,
        PlotDetailViewComponent,
        CsvDialogComponent,
        CsvErrorDialog,
        CsvUploadComponent,
        FeaturedbSourceListComponent,
        WorkspaceSettingsComponent,
        RasterIconComponent,
        LineageGraphComponent,
        LayerExportComponent,
        ChangeProjectionComponent,
        NewProjectComponent,
        LoadProjectComponent,
        SaveProjectAsComponent,
        OperatorListComponent,
        SidenavSearchComponent,
        SidenavSearchRightDirective,
        ROperatorComponent,
        RScriptSaveComponent,
        RScriptLoadComponent,
        TimeInputComponent,
        CsvPropertiesComponent,
        CsvTableComponent,
        PieChartComponent,
        BoxPlotComponent,
        ScatterPlotComponent,
        WorkflowParameterChoiceDialogComponent,
        LayerShareComponent,
        TableComponent,
        MediaviewComponent,
        MediaviewImageComponent,
        MediaviewImageDialogComponent,
        MediaviewAudioComponent,
        MediaviewVideoComponent,
        MediaviewPlaylistComponent,
        FileNamePipe,
        NumericPipe,
        SourceDatasetComponent,
        FeedbackComponent,
        RasterPolygonClipOperatorComponent,
        FeedbackComponent,
        OlDrawFeaturesComponent,
        CountryPolygonSelectionComponent,
        SymbologyEditorComponent,
        ColorizerEditorComponent,
        ZoomHandlesComponent,
        HeatmapOperatorComponent,
        CountryPolygonSelectionComponent,
        CodeEditorOverlayComponent,
        RQuickHelpComponent,
        CodeLayerSelectorComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([{path: '**', component: AppComponent}], {useHash: true}),
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        DragulaModule,
        ReactiveFormsModule,
        ColorPickerModule,
        CopyClipboardModule,
        HttpModule,
    ],
    entryComponents: [
        RenameLayerComponent,
        RasterRepositoryComponent,
        AbcdRepositoryComponent,
        GfbioBasketsComponent,
        PointInPolygonFilterOperatorComponent,
        NumericAttributeFilterOperatorComponent,
        TextualAttributeFilterOperatorComponent,
        TimeConfigComponent,
        ExpressionOperatorComponent,
        RasterValueExtractionOperatorComponent,
        HistogramOperatorComponent,
        GbifOperatorComponent,
        SourceOperatorListComponent,
        LoginComponent,
        HelpComponent,
        SplashDialogComponent,
        CsvDialogComponent,
        CsvErrorDialog,
        PlotListComponent,
        PlotDetailViewComponent,
        FeaturedbSourceListComponent,
        WorkspaceSettingsComponent,
        LineageGraphComponent,
        LayerExportComponent,
        ChangeProjectionComponent,
        NewProjectComponent,
        LoadProjectComponent,
        SaveProjectAsComponent,
        OperatorListComponent,
        ROperatorComponent,
        RScriptSaveComponent,
        RScriptLoadComponent,
        PieChartComponent,
        ScatterPlotComponent,
        BoxPlotComponent,
        WorkflowParameterChoiceDialogComponent,
        LayerShareComponent,
        MediaviewImageComponent,
        MediaviewImageDialogComponent,
        MediaviewAudioComponent,
        MediaviewVideoComponent,
        RasterPolygonClipOperatorComponent,
        OlDrawFeaturesComponent,
        CountryPolygonSelectionComponent,
        CodeEditorOverlayComponent,
        SymbologyEditorComponent,
        ColorizerEditorComponent,
        HeatmapOperatorComponent,
    ],
    providers: [
        DragulaService,
        MatIconRegistry,
        FormBuilder,
        ProjectService,
        MappingQueryService,
        LayerService,
        LayoutService,
        StorageService,
        RandomColorService,
        MapService,
        NotificationService,
        UserService,
        SidenavRef,
        Config,
        {
            provide: APP_INITIALIZER,
            useFactory: configInitializer,
            deps: [Config],
            multi: true,
        },
        CsvPropertiesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
