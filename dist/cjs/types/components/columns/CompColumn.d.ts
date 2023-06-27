import { FC, ReactNode } from 'react';
interface IProps {
    rowIdx: number;
    columnIdx: number;
    comp: FC<{
        rowIdx: number;
        columnIdx: number;
    }> | ReactNode;
}
declare const CompColumn: FC<IProps>;
export default CompColumn;
