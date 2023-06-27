import { IPropsColumn } from '../interfaces';
import ArrayColumn from './columns/ArrayColumn';
import ButtonColumn from './columns/ButtonColumn';
import CheckColumn from './columns/CheckColumn';
import CompColumn from './columns/CompColumn';
import HiddenColumn from './columns/HiddenColumn';
import ImageColumn from './columns/ImageColumn';
import InputColumn from './columns/InputColumn';
import ItemsColumn from './columns/ItemsColumn';
import LinkColumn from './columns/LinkColumn';
import StringColumn from './columns/StringColumn';
import ToggleColumn from './columns/ToggleColumn';
declare class ColumnPropsGenerator {
    static getColumns(columns: IPropsColumn[]): (ArrayColumn | ButtonColumn | CheckColumn | CompColumn | HiddenColumn | ImageColumn | InputColumn | ItemsColumn | LinkColumn | StringColumn | ToggleColumn)[];
}
export default ColumnPropsGenerator;
