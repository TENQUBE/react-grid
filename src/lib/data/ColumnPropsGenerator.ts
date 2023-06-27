import { IPropsColumn, GridType } from '../interfaces'
import ArrayColumn from './columns/ArrayColumn'
import ButtonColumn from './columns/ButtonColumn'
import CheckColumn from './columns/CheckColumn'
import CompColumn from './columns/CompColumn'
import HiddenColumn from './columns/HiddenColumn'
import ImageColumn from './columns/ImageColumn'
import InputColumn from './columns/InputColumn'
import ItemsColumn from './columns/ItemsColumn'
import LinkColumn from './columns/LinkColumn'
import StringColumn from './columns/StringColumn'
import ToggleColumn from './columns/ToggleColumn'

class ColumnPropsGenerator {
  
  static getColumns(columns: IPropsColumn[]) {
    try {
      return columns.map((column, i) => {
        const { id, type, width, name, items, callback, className, isSorting } = column

        switch(type) {
          case GridType.Array:
            return new ArrayColumn({ id, type, width, name, className })
          case GridType.Button:
            return new ButtonColumn({ id, type, callback, width, name, className })
          case GridType.Checkbox:
            return new CheckColumn({ id, type, callback, width, className })
          case GridType.Hidden:
            return new HiddenColumn({ id, type })
          case GridType.Image:
            return new ImageColumn({ id, type, width, name, className })
          case GridType.InputText:
          case GridType.InputNumber:
            return new InputColumn({ id, type, callback, width, name, className })
          case GridType.Items:
            return new ItemsColumn({ id, type, items, width, name, className })
          case GridType.Link:
            return new LinkColumn({ id, type, width, name, className, isSorting, callback })
          case GridType.String:
            return new StringColumn({ id, type, width, name, className, isSorting, callback })
          case GridType.Toggle:
            return new ToggleColumn({ id, type, callback, width, name, className })
          case GridType.Component:
            return new CompColumn({ id, type, width, name, className, isSorting, callback })
        }
      })
    } catch(e) {
      console.error(e)
      return []
    }
  }

}

export default ColumnPropsGenerator