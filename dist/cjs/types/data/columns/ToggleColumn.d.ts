import { GridType } from '../../interfaces';
interface IParmas {
    id: string;
    type: GridType.Toggle;
    callback: Function;
    width?: number;
    name?: string;
    className?: string;
}
declare class ToggleColumn {
    readonly id: string;
    readonly type: GridType.Toggle;
    readonly callback: Function;
    readonly width?: number;
    readonly name: string;
    readonly className: string;
    constructor({ id, type, callback, width, name, className }: IParmas);
}
export default ToggleColumn;
