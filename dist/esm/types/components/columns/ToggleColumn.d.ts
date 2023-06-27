import { FC } from 'react';
interface IProps {
    rowIdx: number;
    columnIdx: number;
    isActive: boolean;
    callback?: Function;
}
declare const ToggleColumn: FC<IProps>;
export default ToggleColumn;
