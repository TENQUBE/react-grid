import { FC } from 'react';
interface IProps {
    rowIdx: number;
    columnIdx: number;
    value: string;
    callback: Function;
}
declare const ButtonColumn: FC<IProps>;
export default ButtonColumn;
