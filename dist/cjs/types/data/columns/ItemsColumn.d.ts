import { FC, ReactNode } from 'react';
import { GridType } from '../../interfaces';
interface IParmas {
    id: string;
    type: GridType.Items;
    items: Array<FC | ReactNode>;
    width?: number;
    name?: string;
    className?: string;
}
declare class ItemsColumn {
    readonly id: string;
    readonly type: GridType.Items;
    readonly items: Array<FC | ReactNode>;
    readonly width?: number;
    readonly name: string;
    readonly className: string;
    constructor({ id, type, items, width, name, className }: IParmas);
}
export default ItemsColumn;
