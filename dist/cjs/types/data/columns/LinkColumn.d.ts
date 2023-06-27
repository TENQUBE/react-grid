import { GridType } from '../../interfaces';
interface IParmas {
    id: string;
    type: GridType.Link;
    width?: number;
    name?: string;
    className?: string;
    isSorting?: boolean;
    callback?: Function;
}
declare class LinkColumn {
    readonly id: string;
    readonly type: GridType.Link;
    readonly width?: number;
    readonly name: string;
    readonly className: string;
    readonly isSorting: boolean;
    readonly callback: Function;
    constructor({ id, type, width, name, className, isSorting, callback }: IParmas);
}
export default LinkColumn;
