import { FC, ReactNode } from "react";
export declare enum GridType {
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
export declare enum GridTypeStr {
    checkbox = 1,
    string = 2,
    toggle = 3,
    image = 4,
    link = 5,
    button = 6,
    items = 7,
    'input-text' = 8,
    'input-number' = 9,
    array = 10
}
export declare enum EditType {
    Selective = 0,
    Overall = 1
}
export declare enum OrderType {
    Default = 0,
    ASC = 1,
    DESC = 2
}
export interface IInitialValues {
    sorting?: {
        sortBy: string | null;
        orderBy: OrderType;
    };
}
export interface IClassNameByRow {
    index: number;
    className: string;
}
export interface IDefaultColumnProps {
    width?: number;
    className?: string;
}
export interface IPropsColumn {
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
export interface IColumn {
    id: string;
    type: GridType;
    width?: number;
    name?: string;
    callback?: Function;
    className?: string;
    items?: Array<FC<{
        rowIdx: number;
        columnIdx: number;
    }> | ReactNode>;
    isSorting?: boolean;
    sortingAction?: () => any;
}
export interface ILinkRows {
    name: string;
    target: string;
    url: string;
}
export type RowType = string | number | boolean | ILinkRows | Array<string | number> | null | Function | ReactNode;
export interface IPropsOptions {
    scalable?: boolean | IPropsScalableOption;
    fixedSize?: number;
    verticalScroll?: IPropsVerticalScroll;
}
export interface IPropsVerticalScroll {
    enable: boolean;
    type?: 'inner' | 'outer';
    height?: number;
}
export interface IOptions {
    scalable: IScalableOption;
    fixedSize: number;
    verticalScroll: IVerticalScroll;
}
export interface IVerticalScroll {
    enable: boolean;
    type?: 'inner' | 'outer';
    height?: number;
}
export interface IScalableOption {
    enable: boolean;
    storage: IStorageOption;
}
export interface IPropsScalableOption {
    enable: boolean;
    storage?: boolean | IPropsStorageOption;
}
export interface IPropsStorageOption {
    enable: boolean;
    target?: 'local' | 'session';
}
export interface IStorageOption {
    enable: boolean;
    target?: 'local' | 'session';
}
