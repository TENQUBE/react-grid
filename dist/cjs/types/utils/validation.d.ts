import { GridType, IColumn, RowType } from '../interfaces';
export declare const cacheWidthValidation: (cacheData: string, columns: IColumn[]) => false | any[];
export declare const gridDataValidation: (columns: IColumn[], data: RowType[][]) => boolean;
export declare const isDataTypeIncorrect: (type: GridType, datum: RowType, items: Array<React.ReactNode | React.FC>) => boolean;
