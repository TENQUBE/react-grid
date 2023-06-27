import { GridType } from '../../interfaces';
interface IParmas {
    id: string;
    type: GridType.Checkbox;
    callback: Function;
    width?: number;
    className?: string;
}
declare class CheckColumn {
    readonly id: string;
    readonly type: GridType.Checkbox;
    readonly callback: Function;
    readonly width: number;
    readonly className: string;
    constructor({ id, type, callback, width, className }: IParmas);
}
export default CheckColumn;
