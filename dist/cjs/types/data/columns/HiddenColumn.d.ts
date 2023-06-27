import { GridType } from '../../interfaces';
interface IParmas {
    id: string;
    type: GridType.Hidden;
}
declare class HiddenColumn {
    readonly id: string;
    readonly type: GridType.Hidden;
    constructor({ id, type }: IParmas);
}
export default HiddenColumn;
