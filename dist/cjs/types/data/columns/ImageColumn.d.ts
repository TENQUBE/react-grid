import { GridType } from '../../interfaces';
interface IParmas {
    id: string;
    type: GridType.Image;
    width?: number;
    name?: string;
    className?: string;
}
declare class ImageColumn {
    readonly id: string;
    readonly type: GridType.Image;
    readonly width?: number;
    readonly name: string;
    readonly className: string;
    constructor({ id, type, width, name, className }: IParmas);
}
export default ImageColumn;
