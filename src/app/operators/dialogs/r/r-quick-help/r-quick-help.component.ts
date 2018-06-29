import {Component} from '@angular/core';

@Component({
    selector: 'wave-r-quick-help',
    template: `
        <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title>
                <mat-icon>help</mat-icon>
                Quick Help
            </mat-panel-title>
            <mat-panel-description>How the operator works</mat-panel-description>
        </mat-expansion-panel-header>
        <mat-card-content>
            <p>
                The <em>R operator</em> allows executing arbitrary <em>R</em> code on <em>VAT</em> data.
                The result can either be a new raster or vector layer, a plot or plain text.
                For accessing the input data there exists a <code>mapping</code> object that offers the following
                functionality:</p>
            <table>
                <tr>
                    <th>Functionality</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><code>loadRaster(rasterId, queryRectangle)</code></td>
                    <td>
                        Load the <code>rasterId</code>th input raster as an <em>R</em>
                        <a
                            href="https://cran.r-project.org/web/packages/raster/raster.pdf"
                            target="_blank"
                        ><code>raster</code></a>.
                    </td>
                </tr>
                <tr>
                    <td><code>loadRasterAsVector(rasterId, queryRectangle)</code></td>
                    <td>Load the <code>rasterId</code>th input raster as an <em>R</em> numeric vector.</td>
                </tr>
                <tr>
                    <td><code>rastercount</code></td>
                    <td>This variable contains the amount of raster inputs.</td>
                </tr>
                <tr>
                    <td><code>loadPoints(pointId, queryRectangle)</code></td>
                    <td>
                        Load the <code>pointId</code>th input point collection as an <em>R</em>
                        <a
                            href="https://cran.r-project.org/web/packages/sp/sp.pdf"
                            target="_blank"
                        ><code>SpatialPointsDataFrame</code></a>.
                    </td>
                </tr>
                <tr>
                    <td><code>pointscount</code></td>
                    <td>This variable contains the amount of point collection inputs.</td>
                </tr>
                <tr>
                    <td><code>loadLines(lineId, queryRectangle)</code></td>
                    <td>
                        Load the <code>lineId</code>th input line collection as an <em>R</em>
                        <a
                            href="https://cran.r-project.org/web/packages/sp/sp.pdf"
                            target="_blank"
                        ><code>SpatialLinesDataFrame</code></a>.
                    </td>
                </tr>
                <tr>
                    <td><code>linescount</code></td>
                    <td>This variable contains the amount of line collection inputs.</td>
                </tr>
                <tr>
                    <td><code>loadPolygons(polygonId, queryRectangle)</code></td>
                    <td>
                        Load the <code>polygonId</code>th input polygon collection as an <em>R</em>
                        <a
                            href="https://cran.r-project.org/web/packages/sp/sp.pdf"
                            target="_blank"
                        ><code>SpatialPolygonDataFrame</code></a>.
                    </td>
                </tr>
                <tr>
                    <td><code>polygonscount</code></td>
                    <td>This variable contains the amount of polygon collection inputs.</td>
                </tr>
                <tr>
                    <td><code>qrect</code></td>
                    <td>
                        This variable is a list that contains the fields
                        <code>t1, t2, x1, y1, x2, y2, xres, yres</code> and <code>epsg</code>.
                    </td>
                </tr>
            </table>
            <p>An example is <code>mapping.loadRaster(0, mapping.qrect)</code> for accessing the first raster.</p>
        </mat-card-content>
    </mat-expansion-panel>`,
    styleUrls: ['./r-quick-help.component.scss'],
})
export class RQuickHelpComponent {}
