// import {Operator, ResultType} from "./models/operator.model";
// type Colorizer = "gray" | "height";

export interface MappingSourceChannel {
  name: string;
  id: number;
  datatype: string;
  nodata: number;
  unit: any;
  colorizer: string;
  transform: any;
}

export interface MappingSource {
  source: string;
  name: string;
  channels: MappingSourceChannel[];
  colorizer: string;
  coords: any;


  // intoSourceOperator(): Operator {
  //  return new Operator("source", ResultType.RASTER, )
  // }
}
