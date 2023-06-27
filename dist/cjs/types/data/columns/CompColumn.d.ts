import { FC, ReactNode } from 'react';
import { GridType } from '../../interfaces';
interface IParmas {
    id: string;
    type: GridType.Component;
    width?: number;
    name?: string;
    className?: string;
    isSorting?: boolean;
    callback?: Function;
}
declare class CompColumn {
    readonly id: string;
    readonly type: GridType.Component;
    readonly items: Array<FC | ReactNode>;
    readonly width?: number;
    readonly name: string;
    readonly className: string;
    readonly isSorting: boolean;
    readonly callback: Function;
    constructor({ id, type, width, name, className, isSorting, callback }: IParmas);
}
export default CompColumn;
