import {OperatorType, OperatorTypeDict} from '../operator-type.model';

import {NumericAttributeFilterType, NumericAttributeFilterTypeDict} from './numeric-attribute-filter-type.model';
import {RasterValueExtractionType, RasterValueExtractionTypeDict} from './raster-value-extraction-type.model';
import {ExpressionType, ExpressionTypeDict} from './expression-type.model';
import {ProjectionType, ProjectionTypeDict} from './projection-type.model';
import {GFBioSourceType, GFBioSourceTypeDict} from './gfbio-source-type.model';
import {RasterSourceType, RasterSourceTypeDict} from './raster-source-type.model';
import {HistogramType, HistogramTypeDict} from './histogram-type.model';
import {RScriptType, RScriptTypeDict} from './r-script-type.model';
import {PointInPolygonFilterType, PointInPolygonFilterTypeDict} from './point-in-polygon-filter-type.model';
import {WKTSourceType, WKTSourceTypeDict} from './wkt-source-type.model';
import {ABCDSourceType, ABCDSourceTypeDict} from './abcd-source-type.model';
import {
    MsgCo2CorrectionType,
    MsgPansharpenType,
    MsgPansharpenTypeDict,
    MsgRadianceType,
    MsgReflectanceType,
    MsgReflectanceTypeDict,
    MsgSofosGccThermalThresholdType,
    MsgSolarangleType,
    MsgSolarangleTypeDict,
    MsgTemperatureType,
} from './msg-types.model';
import {CsvSourceType, CsvSourceTypeDict} from './csv-source-type.model';
import {PangaeaSourceType, PangaeaSourceTypeDict} from './pangaea-source-type.model';
import {ClassificationType, ClassificationTypeDict} from './classification-type.model';
import {
    FeatureCollectionDBSourceType,
    FeatureCollectionDBSourceTypeDict
} from './feature-collection-db-source-type.model';
import {TextualAttributeFilterType, TextualAttributeFilterTypeDict} from './textual-attribute-filter-type.model';
import {GdalSourceType, GdalSourceTypeDict} from './gdal-source-type.model';
import {ScatterPlotType, ScatterPlotTypeDict} from './scatterplot-type.model';
import {BoxPlotType, BoxPlotTypeDict} from './boxplot-type.model';
import {PieChartType, PieChartTypeDict} from './piechart-type.model';
import {RasterizePolygonType, RasterizePolygonTypeDict} from './rasterize-polygon-type.model';
import {HeatmapType, HeatmapTypeDict} from './heatmap-type.model';

/**
 * A simple factory for de-serializing operator types.
 */
export abstract class OperatorTypeFactory {
    /**
     * Create operator type from serialized data.
     */
    static fromDict(dict: OperatorTypeDict): OperatorType {
        switch (dict.operatorType) {
            case NumericAttributeFilterType.TYPE:
                return NumericAttributeFilterType.fromDict(dict as NumericAttributeFilterTypeDict);
            case TextualAttributeFilterType.TYPE:
                return TextualAttributeFilterType.fromDict(dict as TextualAttributeFilterTypeDict);
            case RasterValueExtractionType.TYPE:
                return RasterValueExtractionType.fromDict(dict as RasterValueExtractionTypeDict);
            case ExpressionType.TYPE:
                return ExpressionType.fromDict(dict as ExpressionTypeDict);
            case ProjectionType.TYPE:
                return ProjectionType.fromDict(dict as ProjectionTypeDict);
            case GFBioSourceType.TYPE:
                return GFBioSourceType.fromDict(dict as GFBioSourceTypeDict);
            case RasterSourceType.TYPE:
                return RasterSourceType.fromDict(dict as RasterSourceTypeDict);
            case GdalSourceType.TYPE:
                return GdalSourceType.fromDict(dict as GdalSourceTypeDict);
            case HistogramType.TYPE:
                return HistogramType.fromDict(dict as HistogramTypeDict);
            case RScriptType.TYPE:
                return RScriptType.fromDict(dict as RScriptTypeDict);
            case PointInPolygonFilterType.TYPE:
                return PointInPolygonFilterType.fromDict(dict as PointInPolygonFilterTypeDict);
            case WKTSourceType.TYPE:
                return WKTSourceType.fromDict(dict as WKTSourceTypeDict);
            case MsgRadianceType.TYPE:
                return MsgRadianceType.fromDict(dict);
            case MsgReflectanceType.TYPE:
                return MsgReflectanceType.fromDict(dict as MsgReflectanceTypeDict);
            case MsgSolarangleType.TYPE:
                return MsgSolarangleType.fromDict(dict as MsgSolarangleTypeDict);
            case MsgTemperatureType.TYPE:
                return MsgTemperatureType.fromDict(dict);
            case MsgPansharpenType.TYPE:
                return MsgPansharpenType.fromDict(dict as MsgPansharpenTypeDict);
            case MsgCo2CorrectionType.TYPE:
                return MsgCo2CorrectionType.fromDict(dict);
            case MsgSofosGccThermalThresholdType.TYPE:
                return MsgSofosGccThermalThresholdType.fromDict(dict);
            case ABCDSourceType.TYPE:
                return ABCDSourceType.fromDict(dict as ABCDSourceTypeDict);
            case CsvSourceType.TYPE:
                return CsvSourceType.fromDict(dict as CsvSourceTypeDict);
            case ClassificationType.TYPE:
                return ClassificationType.fromDict(dict as ClassificationTypeDict);
            case PangaeaSourceType.TYPE:
                return PangaeaSourceType.fromDict(dict as PangaeaSourceTypeDict);
            case FeatureCollectionDBSourceType.TYPE:
                return FeatureCollectionDBSourceType.fromDict(dict as FeatureCollectionDBSourceTypeDict);
            case ScatterPlotType.TYPE:
                return ScatterPlotType.fromDict(dict as ScatterPlotTypeDict);
            case BoxPlotType.TYPE:
                return BoxPlotType.fromDict(dict as BoxPlotTypeDict);
            case PieChartType.TYPE:
                return PieChartType.fromDict(dict as PieChartTypeDict);
            case RasterizePolygonType.TYPE:
                return RasterizePolygonType.fromDict(dict as RasterizePolygonTypeDict);
            case HeatmapType.TYPE:
                return HeatmapType.fromDict(dict as HeatmapTypeDict);
            default:
                throw Error('There is not factory method defined for this operator.');
        }
    }
}
