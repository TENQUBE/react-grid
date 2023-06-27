import { FC } from 'react';
interface IProps {
    rowIdx: number;
    columnIdx: number;
    value: boolean;
    callback?: Function;
}
declare const CheckColumn: FC<IProps>;
export default CheckColumn;
