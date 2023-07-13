import { FC, ReactNode } from 'react';
import { GridType } from '../../interfaces';
interface IParmas {
    id: string;
    type: GridType.Items;
    items: Array<FC | ReactNode>;
    width?: number;
    name?: string;
    className?: string;
    isSorting?: boolean;
    callback?: Function;
}
declare class ItemsColumn {
    readonly id: string;
    readonly type: GridType.Items;
    readonly items: Array<FC | ReactNode>;
    readonly width?: number;
    readonly name: string;
    readonly className: string;
    readonly isSorting: boolean;
    readonly callback: Function;
    constructor({ id, type, items, width, name, className, isSorting, callback }: IParmas);
}
export default ItemsColumn;
