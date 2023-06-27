import { FC } from 'react';
import { IColumn, IOptions, RowType, IClassNameByRow } from '../interfaces';
interface IProps {
    tableId: string;
    columns: IColumn[];
    rows: RowType[][];
    options: IOptions;
    addClassNameByRows?: IClassNameByRow[];
    widthList: Array<number | null>;
}
declare const Tbody: FC<IProps>;
export default Tbody;
