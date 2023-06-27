export const getResizeColumnClassName = (tableId: string, index: number) => {
  return `${tableId}-column-${index}`
}

export const getStorageNameByWidths = (id: string) => {
  return `react-grid-${id}-widths`
}