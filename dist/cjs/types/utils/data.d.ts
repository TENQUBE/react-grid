import { IOptions, IColumn, IPropsColumn, IPropsOptions, IClassNameByRow, IScalableOption } from '../interfaces';
import ClassNameByRow from '../data/props/ClassNameByRow';
export declare const getColumnPrintWidth: (id: string, gridEl: HTMLDivElement, widthList: Array<null | number>, scalable: IScalableOption) => number[];
export declare const getColumnWidth: (id: string, gridEl: HTMLDivElement, columns: IColumn[], scalable: IScalableOption) => any[];
export declare const getColumns: (propsColumns: IPropsColumn[], { sortBy, setSortBy, orderBy, setOrderBy }: {
    sortBy: any;
    setSortBy: any;
    orderBy: any;
    setOrderBy: any;
}) => IColumn[];
export declare const getOptions: (options: IPropsOptions) => IOptions;
export declare const getRowClassNames: (classNames: IClassNameByRow[]) => ClassNameByRow[];
