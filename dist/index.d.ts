import { FC, ReactNode } from 'react';

declare enum GridType {
    Hidden = 0,
    Checkbox = 1,
    String = 2,
    Toggle = 3,
    Image = 4,
    Link = 5,
    Button = 6,
    Items = 7,
    InputText = 8,
    InputNumber = 9,
    Array = 10,
    Component = 11
}
declare enum EditType {
    Selective = 0,
    Overall = 1
}
declare enum OrderType {
    Default = 0,
    ASC = 1,
    DESC = 2
}
interface IInitialValues {
    sorting?: {
        sortBy: string | null;
        orderBy: OrderType;
    };
}
interface IClassNameByRow {
    index: number;
    className: string;
}
interface IPropsColumn {
    id: string;
    type: GridType;
    width?: number;
    name?: string;
    items?: Array<FC<{
        rowIdx: number;
        columnIdx: number;
    }> | ReactNode>;
    callback?: Function;
    className?: string;
    isSorting?: boolean;
}
interface ILinkRows {
    name: string;
    target: string;
    url: string;
}
type RowType = string | number | boolean | ILinkRows | Array<string | number> | null | Function | ReactNode;
interface IPropsOptions {
    scalable?: boolean | IPropsScalableOption;
    fixedSize?: number;
    scroll?: IPropsScroll;
}
interface IPropsScroll {
    enable: boolean;
    type?: 'inner' | 'outer';
    height?: number;
}
interface IPropsScalableOption {
    enable: boolean;
    storage?: boolean | IPropsStorageOption;
}
interface IPropsStorageOption {
    enable: boolean;
    target?: 'local' | 'session';
}

interface IProps {
    id: string;
    rows: RowType[][];
    columns: IPropsColumn[];
    options?: IPropsOptions;
    addClassNameByRows?: IClassNameByRow[];
}
declare const ReactGrid: FC<IProps>;

export { EditType, GridType, IClassNameByRow, IInitialValues, ILinkRows, IPropsColumn, IPropsOptions, IPropsScalableOption, IPropsStorageOption, OrderType, RowType, ReactGrid as default };
