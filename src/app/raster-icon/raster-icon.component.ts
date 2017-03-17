import {Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChange} from '@angular/core';
import {MappingColorizer} from '../layers/symbology/symbology.model';

@Component({
  selector: 'wave-raster-icon',
  templateUrl: './raster-icon.component.html',
  styleUrls: ['./raster-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RasterIconComponent implements OnInit, OnChanges {

  @Input() xCells: number;
  @Input() yCells: number;
  @Input() colorizer: MappingColorizer;

  xCellStarts: Array<number> = [];
  yCellStarts: Array<number> = [];
  colorMapping: Array<number>;
  colors: Array<string>;
  grays = ['#bfbfbf', '#7f7f7f'];

  constructor() {}

  cellColor(x: number, y: number): string {
      const idx = this.xCells*y + x;
      const mapIdx = this.colorMapping[idx];
      const clr = this.colors[mapIdx];
      return clr;
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
      const validSymbology = this.colorizer && this.colorizer.breakpoints && this.colorizer.breakpoints.length > 0;
      if (validSymbology) {
        this.updateColorMapping(this.colorizer.breakpoints.map(b => b[1]), this.colorizer.interpolation==='linear');
      }
      else {
          this.updateColorMapping(this.grays);
      }
  }

  ngOnInit() {
      this.xCellStarts = Array.from({length: this.xCells},(v,k)=>k);
      this.yCellStarts = Array.from({length: this.yCells},(v,k)=>k);
      this.updateColorMapping(this.grays);
  }

  updateColorMapping(clrs: Array<string>, gradient?: boolean) {
      const nclr = clrs.length;

      if ( !this.colorMapping || clrs != this.colors ) {
          const ncells = this.xCells * this.yCells;
          let clrm = new Array(ncells);

          const scale = ( !!gradient) ? nclr / (this.xCells + this.yCells - 1 ): nclr / ncells;

          for (let y = 0; y < this.yCells; y++) {
              for (let x = 0; x < this.xCells; x++) {
                  const idx = y*this.xCells + x;
                  if (nclr === 2) {
                      clrm[idx] = (y%2 == 0) ? (x%2) : ((x+1)%2);
                  } else {
                      const uidx = (!!gradient) ? this.xCells -1 -x +y : idx;
                      clrm[idx] = Math.trunc(uidx*scale) % nclr;
                  }
              }
          }
          this.colorMapping = clrm;
          this.colors = clrs;
    }
  }
}
