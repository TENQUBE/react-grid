import { GridType } from '../../interfaces';
interface IParmas {
    id: string;
    type: GridType.InputNumber | GridType.InputText;
    callback: Function;
    width?: number;
    name?: string;
    className?: string;
}
declare class InputColumn {
    readonly id: string;
    readonly type: GridType.InputNumber | GridType.InputText;
    readonly callback: Function;
    readonly width?: number;
    readonly name: string;
    readonly className: string;
    constructor({ id, type, callback, width, name, className }: IParmas);
}
export default InputColumn;
