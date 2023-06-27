import { GridType } from '../../interfaces';
interface IParmas {
    id: string;
    type: GridType.String;
    width?: number;
    name?: string;
    className?: string;
    isSorting?: boolean;
    callback?: Function;
}
declare class StringColumn {
    readonly id: string;
    readonly type: GridType.String;
    readonly width?: number;
    readonly name: string;
    readonly className: string;
    readonly isSorting: boolean;
    readonly callback: Function;
    constructor({ id, type, width, name, className, isSorting, callback }: IParmas);
}
export default StringColumn;
