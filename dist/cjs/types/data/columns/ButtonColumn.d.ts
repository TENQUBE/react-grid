import { GridType } from '../../interfaces';
interface IParmas {
    id: string;
    type: GridType.Button;
    callback: Function;
    width?: number;
    name?: string;
    className?: string;
}
declare class ButtonColumn {
    readonly id: string;
    readonly type: GridType.Button;
    readonly callback: Function;
    readonly width?: number;
    readonly name: string;
    readonly className: string;
    constructor({ id, type, callback, width, name, className }: IParmas);
}
export default ButtonColumn;
