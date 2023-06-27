import { GridType } from '../../interfaces';
interface IParmas {
    id: string;
    type: GridType.Array;
    width?: number;
    name?: string;
    className?: string;
}
declare class ArrayColumn {
    readonly id: string;
    readonly type: GridType.Array;
    readonly width?: number;
    readonly name: string;
    readonly className: string;
    constructor({ id, type, width, name, className }: IParmas);
}
export default ArrayColumn;
