import { FC } from 'react';
import { IPropsColumn, GridType, IPropsOptions, EditType, RowType, OrderType, IInitialValues, ILinkRows, IClassNameByRow, IPropsScalableOption, IPropsStorageOption, IPropsScrollOption } from './interfaces';
interface IProps {
    id: string;
    rows: RowType[][];
    columns: IPropsColumn[];
    options?: IPropsOptions;
    addClassNameByRows?: IClassNameByRow[];
}
declare const ReactGrid: FC<IProps>;
export default ReactGrid;
export { GridType, EditType, OrderType, RowType, ILinkRows, IPropsColumn, IPropsOptions, IInitialValues, IClassNameByRow, IPropsScalableOption, IPropsStorageOption, IPropsScrollOption };
