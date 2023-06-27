import { FC } from 'react';
interface IProps {
    rowIdx: number;
    columnIdx: number;
    type: 'text' | 'number';
    value: string | number;
    callback: Function;
}
declare const InputColumn: FC<IProps>;
export default InputColumn;
