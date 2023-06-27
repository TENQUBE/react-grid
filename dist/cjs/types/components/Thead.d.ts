import { FC } from 'react';
import { IColumn, IOptions, OrderType, RowType } from '../interfaces';
interface IProps {
    tableId: string;
    tableEl: HTMLDivElement;
    row: RowType[][];
    columns: IColumn[];
    options: IOptions;
    sortBy: string;
    orderBy: OrderType;
    widthList: Array<number | null>;
    setWidthList: (newWidthList: Array<number | null>) => void;
    isOuter?: boolean;
}
declare const Thead: FC<IProps>;
export default Thead;
