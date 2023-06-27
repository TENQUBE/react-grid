import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ".main_table-area__tdxOp {\n  position: relative; }\n  .main_table-area__tdxOp * {\n    box-sizing: border-box; }\n\n.main_table-area__tdxOp.main_table-area-outer-mode__N9NVy .main_scroll-area__yODL- {\n  border: 0; }\n\n.main_error-area__5VzIL {\n  border: 1px solid #D6DEE8;\n  padding: 20px;\n  border-radius: 8px; }\n\n.main_scroll-area-outer__rGmO1 {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  scrollbar-width: thin;\n  scrollbar-color: #606060 transparent; }\n  .main_scroll-area-outer__rGmO1::-webkit-scrollbar {\n    height: 12px;\n    width: 12px; }\n  .main_scroll-area-outer__rGmO1::-webkit-scrollbar-corner {\n    background-color: #FBFBFE;\n    border-bottom-right-radius: 8px; }\n  .main_scroll-area-outer__rGmO1::-webkit-scrollbar-track {\n    background-color: #FBFBFE;\n    border-top: 1px solid #D6DEE8;\n    border-left: 0; }\n  .main_scroll-area-outer__rGmO1::-webkit-scrollbar-thumb {\n    background-color: #D2D2D2;\n    border-radius: 8px;\n    border: 2px solid transparent;\n    border-top-width: 3px;\n    background-clip: padding-box; }\n\n.main_scroll-area__yODL-.main_outer-mode__xMrI0 {\n  overflow: inherit; }\n\n.main_scroll-area__yODL- {\n  overflow-x: auto;\n  overflow-y: hidden;\n  border: 1px solid #D6DEE8;\n  border-radius: 8px;\n  scrollbar-width: thin;\n  scrollbar-color: #606060 transparent; }\n  .main_scroll-area__yODL-::-webkit-scrollbar {\n    height: 12px;\n    width: 12px; }\n  .main_scroll-area__yODL-::-webkit-scrollbar-corner {\n    background-color: #FBFBFE;\n    border-bottom-right-radius: 8px; }\n  .main_scroll-area__yODL-::-webkit-scrollbar-track:horizontal {\n    background-color: #FBFBFE;\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    border-top: 1px solid #D6DEE8;\n    border-left: 0; }\n  .main_scroll-area__yODL-::-webkit-scrollbar-track:vertical {\n    background-color: #FBFBFE;\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n    border-bottom-left-radius: 0px;\n    border-left: 1px solid #D6DEE8;\n    border-top: 0;\n    z-index: 10; }\n  .main_scroll-area__yODL-::-webkit-scrollbar-thumb {\n    background-color: #D2D2D2;\n    border-radius: 8px;\n    border: 2px solid transparent;\n    border-top-width: 3px;\n    background-clip: padding-box; }\n\n.main_react-grid__7-R2o {\n  width: 100%;\n  font-size: 14px;\n  position: relative;\n  border-collapse: separate;\n  border-spacing: 0;\n  table-layout: fixed; }\n  .main_react-grid__7-R2o tr:last-of-type td {\n    border-bottom: 0; }\n";
var styles$3 = {"table-area":"main_table-area__tdxOp","table-area-outer-mode":"main_table-area-outer-mode__N9NVy","scroll-area":"main_scroll-area__yODL-","error-area":"main_error-area__5VzIL","scroll-area-outer":"main_scroll-area-outer__rGmO1","outer-mode":"main_outer-mode__xMrI0","react-grid":"main_react-grid__7-R2o"};
styleInject(css_248z$3);

var GridType;
(function (GridType) {
    GridType[GridType["Hidden"] = 0] = "Hidden";
    GridType[GridType["Checkbox"] = 1] = "Checkbox";
    GridType[GridType["String"] = 2] = "String";
    GridType[GridType["Toggle"] = 3] = "Toggle";
    GridType[GridType["Image"] = 4] = "Image";
    GridType[GridType["Link"] = 5] = "Link";
    GridType[GridType["Button"] = 6] = "Button";
    GridType[GridType["Items"] = 7] = "Items";
    GridType[GridType["InputText"] = 8] = "InputText";
    GridType[GridType["InputNumber"] = 9] = "InputNumber";
    GridType[GridType["Array"] = 10] = "Array";
    GridType[GridType["Component"] = 11] = "Component";
})(GridType || (GridType = {}));
var GridTypeStr;
(function (GridTypeStr) {
    GridTypeStr[GridTypeStr["checkbox"] = 1] = "checkbox";
    GridTypeStr[GridTypeStr["string"] = 2] = "string";
    GridTypeStr[GridTypeStr["toggle"] = 3] = "toggle";
    GridTypeStr[GridTypeStr["image"] = 4] = "image";
    GridTypeStr[GridTypeStr["link"] = 5] = "link";
    GridTypeStr[GridTypeStr["button"] = 6] = "button";
    GridTypeStr[GridTypeStr["items"] = 7] = "items";
    GridTypeStr[GridTypeStr["input-text"] = 8] = "input-text";
    GridTypeStr[GridTypeStr["input-number"] = 9] = "input-number";
    GridTypeStr[GridTypeStr["array"] = 10] = "array";
})(GridTypeStr || (GridTypeStr = {}));
var EditType;
(function (EditType) {
    EditType[EditType["Selective"] = 0] = "Selective";
    EditType[EditType["Overall"] = 1] = "Overall";
})(EditType || (EditType = {}));
var OrderType;
(function (OrderType) {
    OrderType[OrderType["Default"] = 0] = "Default";
    OrderType[OrderType["ASC"] = 1] = "ASC";
    OrderType[OrderType["DESC"] = 2] = "DESC";
})(OrderType || (OrderType = {}));

var css_248z$2 = ".thead_table-head__1YRL5 {\n  position: relative;\n  border-bottom: 1px solid #D6DEE8;\n  border-right: 1px solid #D6DEE8;\n  min-width: 40px;\n  text-align: left;\n  color: #666;\n  background: #FBFBFE; }\n  .thead_table-head__1YRL5:last-of-type {\n    border-right: 0; }\n    .thead_table-head__1YRL5:last-of-type .thead_resizer__qPx8w {\n      width: 6px;\n      margin-right: 0; }\n\n.thead_table-head-div__xJQs- {\n  padding: 10px 5px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.thead_sorting-table-head__SCIte {\n  position: relative;\n  padding-right: 30px; }\n\n.thead_resizer__qPx8w {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 8px;\n  margin-right: -4px;\n  height: 100%;\n  cursor: col-resize;\n  user-select: none;\n  opacity: 0; }\n\n.thead_fixed__KPu-T {\n  background: #FBFBFE;\n  position: sticky;\n  left: 0; }\n\n.thead_fiexd-head__4j-ct {\n  position: sticky;\n  top: 0; }\n\n.thead_checkbox__5WIOv {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #A4AABB;\n  border-radius: 4px;\n  background: #fff;\n  position: relative; }\n  .thead_checkbox__5WIOv::before {\n    content: '';\n    position: absolute;\n    width: 5.8px;\n    height: 1.7px;\n    background: #fff;\n    top: 9.7px;\n    left: 2.6px;\n    border-radius: 3px;\n    transform: rotate(45deg); }\n  .thead_checkbox__5WIOv::after {\n    content: '';\n    position: absolute;\n    width: 11.4px;\n    height: 1.7px;\n    background: #fff;\n    top: 8.2px;\n    left: 5.7px;\n    border-radius: 3px;\n    transform: rotate(-45deg); }\n\n.thead_checkbox__5WIOv.thead_active__weCt1 {\n  background-color: #FF3284;\n  border-color: #FF3284; }\n\n.thead_sorting-box__tktfE {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  margin-top: -10px;\n  width: 20px;\n  height: 20px; }\n\n.thead_sorting-up__XgsOB {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 5px;\n  width: 0;\n  height: 0;\n  border-bottom: 4px solid transparent;\n  border-top: 4px solid transparent;\n  border-left: 4px solid #CACACA;\n  border-right: 4px solid transparent;\n  transform: rotate(270deg); }\n\n.thead_sorting-up__XgsOB.thead_active__weCt1 {\n  border-left: 4px solid #FF3284; }\n\n.thead_sorting-down__yut83 {\n  content: '';\n  position: absolute;\n  top: 10px;\n  right: 5px;\n  width: 0;\n  height: 0;\n  border-bottom: 4px solid transparent;\n  border-top: 4px solid transparent;\n  border-left: 4px solid #CACACA;\n  border-right: 4px solid transparent;\n  transform: rotate(90deg); }\n\n.thead_sorting-down__yut83.thead_active__weCt1 {\n  border-left: 4px solid #FF3284; }\n";
var styles$2 = {"table-head":"thead_table-head__1YRL5","resizer":"thead_resizer__qPx8w","table-head-div":"thead_table-head-div__xJQs-","sorting-table-head":"thead_sorting-table-head__SCIte","fixed":"thead_fixed__KPu-T","fiexd-head":"thead_fiexd-head__4j-ct","checkbox":"thead_checkbox__5WIOv","active":"thead_active__weCt1","sorting-box":"thead_sorting-box__tktfE","sorting-up":"thead_sorting-up__XgsOB","sorting-down":"thead_sorting-down__yut83"};
styleInject(css_248z$2);

const getResizeColumnClassName = (tableId, index) => {
    return `${tableId}-column-${index}`;
};
const getStorageNameByWidths = (id) => {
    return `react-grid-${id}-widths`;
};

const fixedColumnLeftSize = (widthList, columnIdxByNotHidden) => {
    const columnByNotHidden = widthList.filter((width => typeof width === 'number'));
    const fixedColumns = columnByNotHidden.slice(0, columnIdxByNotHidden);
    return fixedColumns.reduce((pre, cur) => cur + pre, 0);
};
const columnStyles = (widthList, fixedSize, columnIdxByNotHidden, width) => {
    return fixedSize > columnIdxByNotHidden
        ? {
            left: fixedColumnLeftSize(widthList, columnIdxByNotHidden),
            width
        } : {
        width
    };
};
const fixedLeftResize = (fixedSize, tableId, setSize, idx) => {
    for (let i = idx; i < fixedSize - 1; i++) {
        const { width, left } = document.getElementsByClassName(getResizeColumnClassName(tableId, i))[0].style;
        const columns = document.getElementsByClassName(getResizeColumnClassName(tableId, i + 1));
        for (const column of columns) {
            const leftNo = parseInt(width) + parseInt(left);
            if (leftNo > 0) {
                column.style.left = `${leftNo}px`;
            }
        }
    }
};

function isNotFalse(value) {
    return value !== false;
}

const Thead = ({ tableId, tableEl, row, columns, options, sortBy, orderBy, widthList, setWidthList, isOuter = false }) => {
    const { fixedSize, scalable: { enable, storage }, scroll: { enable: vsEnable, type: vsType, height: vsHeight } } = options;
    const isStorage = storage.enable ? storage.target : false;
    const isFixedHead = vsEnable && vsType === 'inner' && vsHeight > 0;
    const theadTrEl = useRef(null);
    const resizeRef = useRef({
        position: 0,
        size: 0
    });
    const [tableHeight, setTableHeight] = useState();
    const handleDragStart = (e, idx) => {
        const columns = document.getElementsByClassName(getResizeColumnClassName(tableId, idx));
        resizeRef.current = {
            position: e.clientX,
            size: columns[0].offsetWidth
        };
    };
    const handleDrag = (e, idx) => {
        const columns = document.getElementsByClassName(getResizeColumnClassName(tableId, idx));
        const moveSize = (e.clientX - resizeRef.current.position);
        const endSize = resizeRef.current.size + moveSize;
        const setSize = (endSize < 0 || endSize > 40) ? endSize : 40;
        fixedLeftResize(fixedSize, tableId, setSize, idx);
        for (const column of columns) {
            column.style.width = `${setSize}px`;
            // ;(column as HTMLElement).style.flex = `${setSize} 0 auto`
        }
    };
    const handleDragEnd = () => {
        const columnEls = theadTrEl.current.children;
        let loopIdx = 0;
        const widthList = columns.map(({ type }) => {
            if (type === GridType.Hidden)
                return null;
            const width = parseInt(columnEls[loopIdx].style.width);
            loopIdx += 1;
            return width;
        });
        if (isStorage) {
            const target = storage.target === 'local' ? window.localStorage : window.sessionStorage;
            target.setItem(getStorageNameByWidths(tableId), JSON.stringify(widthList));
        }
        setWidthList(widthList);
        setTableHeight(tableEl.clientHeight);
    };
    const generateClassName = (className, columnIdx, columnIdxByNotHidden, type) => {
        const classList = [styles$2['table-head'], getResizeColumnClassName(tableId, columnIdx), `${GridTypeStr[type]}-type`, 'table-head'];
        if (fixedSize >= columnIdxByNotHidden + 1)
            classList.push(styles$2['fixed'], 'fixed');
        if (className)
            classList.push(className);
        if (isFixedHead)
            classList.push(styles$2['fiexd-head'], 'fiexd-head');
        return classList.join(' ');
    };
    const hiddenIndices = columns.map((column, i) => column.type === GridType.Hidden ? i : false).filter(isNotFalse);
    let loopIdx = 0;
    useEffect(() => {
        if (tableEl)
            setTableHeight(tableEl.clientHeight);
    }, [tableEl]);
    return (jsx("thead", { children: jsx("tr", Object.assign({ ref: theadTrEl }, { children: columns.map((column, i) => {
                const { id, type, name, isSorting, sortingAction, className, callback } = column;
                if (type === GridType.Hidden)
                    return null;
                const width = widthList[i];
                const thIdx = loopIdx;
                loopIdx += 1;
                const isSortBy = id === sortBy;
                const isAllCheck = () => type === GridType.Checkbox && (row.length !== 0 && row.every(v => v[i]));
                const hiddenLen = hiddenIndices.filter((idx) => idx <= i).filter(isNotFalse).length;
                const columnIdxByNotHidden = i - hiddenLen;
                const zIndex = fixedSize >= i ? 101 + columns.length - i : columns.length - i + 1;
                return (jsxs("th", Object.assign({ className: generateClassName(className, thIdx, columnIdxByNotHidden, type), style: Object.assign(Object.assign({}, columnStyles(widthList, fixedSize, columnIdxByNotHidden, width)), { zIndex: isOuter ? zIndex + 10 : zIndex, cursor: isSorting ? 'pointer' : 'default' }), onClick: isSorting ? sortingAction : null }, { children: [jsx("div", Object.assign({ className: isSorting ? `${styles$2['sorting-table-head']} ${styles$2['table-head-div']}` : styles$2['table-head-div'] }, { children: type === GridType.Checkbox ? (jsx("div", { className: isAllCheck() ? `${styles$2['checkbox']} ${styles$2['active']} checkbox active` : `${styles$2['checkbox']} checkbox`, onClick: () => callback ? callback(true) : null })) : (jsxs(Fragment, { children: [jsx("span", { children: name }), isSorting && (jsxs("div", Object.assign({ className: `${styles$2['sorting-box']} sorting-box` }, { children: [jsx("i", { className: (isSortBy && orderBy === OrderType.ASC) ? `${styles$2['sorting-up']} ${styles$2['active']} sorting-up active` : `${styles$2['sorting-up']} sorting-up` }), jsx("i", { className: (isSortBy && orderBy === OrderType.DESC) ? `${styles$2['sorting-down']} ${styles$2['active']} sorting-down active` : `${styles$2['sorting-down']} sorting-down` })] })))] })) })), enable && (jsx("i", { className: styles$2['resizer'], draggable: true, onDragStart: (e) => handleDragStart(e, thIdx), onDrag: (e) => handleDrag(e, thIdx), onDragEnd: handleDragEnd, style: {
                                height: `${tableHeight}px`,
                                zIndex
                            } }))] }), id));
            }) })) }));
};

var css_248z$1 = ".tbody_table-body__g3m5L {\n  border-bottom: 1px solid #D6DEE8;\n  border-right: 1px solid #D6DEE8;\n  min-width: 40px; }\n  .tbody_table-body__g3m5L:last-of-type {\n    border-right: 0; }\n\n.tbody_type-error-message__b1eFE {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  background: #ff9595;\n  font-size: 12px;\n  margin: 0;\n  padding: 10px; }\n\n.tbody_fixed__OSL8Q {\n  background: #FBFBFE;\n  position: sticky;\n  left: 0; }\n";
var styles$1 = {"table-body":"tbody_table-body__g3m5L","type-error-message":"tbody_type-error-message__b1eFE","fixed":"tbody_fixed__OSL8Q"};
styleInject(css_248z$1);

const cacheWidthValidation = (cacheData, columnLength) => {
    if (!cacheData)
        return false;
    try {
        const cacheWidth = JSON.parse(cacheData);
        if (!Array.isArray(cacheWidth))
            return false;
        if (cacheWidth.some((width) => typeof width !== 'number' && width !== null))
            return false;
        if (cacheWidth.length !== columnLength)
            return false;
        return cacheWidth;
    }
    catch (_a) {
        return false;
    }
};
const gridDataValidation = (columns, data) => {
    return data.every((datum) => datum.length === columns.length);
};
const isDataTypeIncorrect = (type, datum, items) => {
    switch (type) {
        case GridType.Array:
            if (!Array.isArray(datum))
                return true;
            if (datum.some((d) => typeof d !== 'string' && typeof d !== 'number'))
                return true;
            break;
        case GridType.Button:
            if (typeof datum !== 'string')
                return true;
            break;
        case GridType.Checkbox:
            if (typeof datum !== 'boolean')
                return true;
            break;
        case GridType.Image:
            if (typeof datum !== 'string')
                return true;
            break;
        case GridType.InputText:
            if (typeof datum !== 'string')
                return true;
            break;
        case GridType.InputNumber:
            if (typeof datum !== 'number')
                return true;
            break;
        case GridType.Items:
            if (typeof datum !== 'number')
                return true;
            if (typeof items[datum] !== 'function' && typeof items[datum] !== 'object')
                return true;
            break;
        case GridType.Link:
            const { name, target, url } = datum;
            if (typeof name !== 'string' || typeof target !== 'string' || typeof url !== 'string')
                return true;
            break;
        case GridType.String:
            if (typeof datum !== 'string')
                return true;
            break;
        case GridType.Toggle:
            if (typeof datum !== 'boolean')
                return true;
            break;
        case GridType.Component:
            if (typeof datum !== 'function' && typeof datum !== 'object')
                return true;
            break;
    }
    return false;
};

var css_248z = ".column_basic-text__B3Gv8 {\n  padding: 10px 15px;\n  line-height: 20px;\n  font-size: 13px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  min-height: 40px;\n  margin: 0; }\n\n.column_checkbox-area__eAcsr {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  min-height: 40px; }\n\n.column_checkbox__8udXu {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #A4AABB;\n  border-radius: 4px;\n  background: #fff;\n  position: relative; }\n  .column_checkbox__8udXu::before {\n    content: '';\n    position: absolute;\n    width: 5.8px;\n    height: 1.7px;\n    background: #fff;\n    top: 9.7px;\n    left: 2.6px;\n    border-radius: 3px;\n    transform: rotate(45deg); }\n  .column_checkbox__8udXu::after {\n    content: '';\n    position: absolute;\n    width: 11.4px;\n    height: 1.7px;\n    background: #fff;\n    top: 8.2px;\n    left: 5.7px;\n    border-radius: 3px;\n    transform: rotate(-45deg); }\n\n.column_checkbox__8udXu.column_active__7Xr1o {\n  background-color: #FF3284;\n  border-color: #FF3284; }\n\n.column_toggle-area__F4coi {\n  padding: 0 15px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  min-height: 40px; }\n\n.column_toggle__hlXbF {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  border-radius: 28px;\n  background-color: #A4AABB;\n  cursor: pointer;\n  transition: 0.4s; }\n  .column_toggle__hlXbF:before {\n    content: '';\n    position: absolute;\n    top: 3px;\n    left: 3px;\n    display: block;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background-color: #fff;\n    transition: 0.4s; }\n\n.column_toggle__hlXbF.column_active__7Xr1o {\n  background-color: #FF3284; }\n  .column_toggle__hlXbF.column_active__7Xr1o:before {\n    transform: translateX(19px); }\n\n.column_image-area__EuBp3 {\n  padding: 0;\n  height: 100%;\n  line-height: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px; }\n\n.column_image__je5Qh {\n  width: 100%;\n  height: auto; }\n\n.column_link__JR987 {\n  display: inline-block;\n  padding: 10px 15px;\n  line-height: 24px;\n  text-decoration: none;\n  font-weight: 500;\n  color: #FF3284; }\n\n.column_button-area__PEP4v {\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  min-height: 40px; }\n\n.column_button__GN69Z {\n  display: inline-block;\n  border: 0;\n  border-radius: 4px;\n  padding: 4px 10px;\n  line-height: 22px;\n  font-weight: 500;\n  color: #fff;\n  cursor: pointer;\n  width: 100%;\n  background: #FF3284; }\n\n.column_input-area__FAkji {\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  min-height: 40px; }\n\n.column_input-column__6AYkc {\n  width: 100%;\n  padding: 5px 15px 5px;\n  outline: none;\n  font-family: inherit;\n  background: inherit;\n  line-height: 18px;\n  font-size: 13px;\n  border: 1px solid #D6DEE8;\n  border-radius: 8px; }\n\n.column_array-area__JIZrp {\n  padding: 0 9px 9px 0; }\n\n.column_array-box__bzlpj {\n  font-size: 12px;\n  padding: 4px 6px;\n  display: inline-block;\n  border: 1px solid #ddd;\n  background: #fff;\n  margin: 9px 0 0 9px;\n  border-radius: 4px; }\n";
var styles = {"basic-text":"column_basic-text__B3Gv8","checkbox-area":"column_checkbox-area__eAcsr","checkbox":"column_checkbox__8udXu","active":"column_active__7Xr1o","toggle-area":"column_toggle-area__F4coi","toggle":"column_toggle__hlXbF","image-area":"column_image-area__EuBp3","image":"column_image__je5Qh","link":"column_link__JR987","button-area":"column_button-area__PEP4v","button":"column_button__GN69Z","input-area":"column_input-area__FAkji","input-column":"column_input-column__6AYkc","array-area":"column_array-area__JIZrp","array-box":"column_array-box__bzlpj"};
styleInject(css_248z);

const StringColumn$1 = ({ value }) => {
    return (jsx(Fragment, { children: jsx("p", Object.assign({ className: styles['basic-text'] }, { children: value })) }));
};

const CheckColumn$1 = ({ rowIdx, columnIdx, value, callback }) => {
    const handleClickCheck = () => {
        if (callback)
            callback(false, rowIdx, columnIdx);
    };
    return (jsx("div", Object.assign({ className: styles['checkbox-area'] }, { children: jsx("div", { className: value ? `${styles['checkbox']} ${styles['active']} checkbox active` : `${styles['checkbox']} checkbox`, onClick: handleClickCheck }) })));
};

const ToggleColumn$1 = ({ rowIdx, columnIdx, isActive, callback }) => {
    const handleClickToggle = () => {
        if (callback)
            callback(rowIdx, columnIdx);
    };
    return (jsx("div", Object.assign({ className: styles['toggle-area'] }, { children: jsx("div", { className: isActive ? `${styles['toggle']} ${styles['active']} toggle active` : `${styles['toggle']} toggle`, onClick: handleClickToggle }) })));
};

const ImageColumn$1 = ({ value }) => {
    return (jsx("div", Object.assign({ className: styles['image-area'] }, { children: jsx("img", { src: value, className: `${styles['image']} image`, alt: '' }) })));
};

const LinkColumn$1 = ({ value: { name, target, url } }) => {
    return (jsx("div", { children: jsx("a", Object.assign({ target: target, href: url, className: styles['link'] }, { children: name })) }));
};

const ButtonColumn$1 = ({ value, rowIdx, columnIdx, callback }) => {
    const handleClick = () => {
        callback(rowIdx, columnIdx);
    };
    return (jsx("div", Object.assign({ className: styles['button-area'] }, { children: jsx("button", Object.assign({ className: `${styles['button']} button`, onClick: handleClick }, { children: value })) })));
};

const ItemsColumn$1 = ({ rowIdx, columnIdx, comp: Comp }) => {
    return (jsx(Fragment, { children: typeof Comp === 'function' ? (jsx(Comp, { rowIdx: rowIdx, columnIdx: columnIdx })) :
            Comp }));
};

const InputColumn$1 = ({ rowIdx, columnIdx, type, value, callback }) => {
    const handleChange = (e) => {
        callback(rowIdx, columnIdx, type === 'number' ? Number(e.target.value) : e.target.value);
    };
    return (jsx("div", Object.assign({ className: styles['input-area'] }, { children: jsx("input", { type: type, value: value, className: styles['input-column'], onChange: handleChange, onFocus: (e) => e.target.select() }) })));
};

const ArrayColumn$1 = ({ values }) => {
    return (jsx("div", Object.assign({ className: styles['array-area'] }, { children: values.map((value, i) => {
            return (jsx("span", Object.assign({ className: styles['array-box'] }, { children: value }), i));
        }) })));
};

const CompColumn$1 = ({ rowIdx, columnIdx, comp: Comp }) => {
    return (jsx(Fragment, { children: typeof Comp === 'function' ? (jsx(Comp, { rowIdx: rowIdx, columnIdx: columnIdx })) :
            Comp }));
};

const Tbody = ({ tableId, columns, rows, options, addClassNameByRows = [], widthList }) => {
    const { fixedSize } = options;
    const generateClassName = (className, rowIdx, columnIdx, columnIdxByNotHidden, type) => {
        const rowClassNames = addClassNameByRows.filter(({ index }) => index === rowIdx).map(({ className }) => className);
        const classList = [styles$1['table-body'], getResizeColumnClassName(tableId, columnIdx), `${GridTypeStr[type]}-type`, `row-${rowIdx}`];
        if (fixedSize >= columnIdxByNotHidden + 1)
            classList.push(styles$1['fixed'], 'fixed');
        if (className)
            classList.push(className, `${className}-${rowIdx}`);
        if (rowClassNames.length > 0)
            classList.push(...rowClassNames);
        return classList.join(' ');
    };
    const hiddenIndices = columns.map((column, i) => column.type === GridType.Hidden ? i : false).filter(isNotFalse);
    return (jsx("tbody", { children: rows.map((row, i) => {
            if (!row || row.length === 0)
                return null;
            let loopIdx = 0;
            return (jsx("tr", { children: row.map((datum, j) => {
                    const { type, className, items, callback } = columns[j];
                    if (type === GridType.Hidden)
                        return null;
                    const width = widthList[j];
                    const tbIdx = loopIdx;
                    loopIdx += 1;
                    const hiddenLen = hiddenIndices.filter((idx) => idx <= j).filter(isNotFalse).length;
                    const columnIdxByNotHidden = j - hiddenLen;
                    const zIndex = fixedSize > j ? 100 + columns.length - j : columns.length - j;
                    return (jsx("td", Object.assign({ className: generateClassName(className, i, tbIdx, columnIdxByNotHidden, type), style: Object.assign(Object.assign({}, columnStyles(widthList, fixedSize, columnIdxByNotHidden, width)), { zIndex }) }, { children: isDataTypeIncorrect(type, datum, items) ?
                            jsx("p", Object.assign({ className: styles$1['type-error-message'] }, { children: "Data type is incorrect" }))
                            : (jsxs(Fragment, { children: [type === GridType.String && (jsx(StringColumn$1, { value: datum })), type === GridType.Checkbox && (jsx(CheckColumn$1, { rowIdx: i, columnIdx: j, value: datum, callback: callback })), type === GridType.Toggle && (jsx(ToggleColumn$1, { rowIdx: i, columnIdx: j, isActive: datum, callback: callback })), type === GridType.Image && (jsx(ImageColumn$1, { value: datum })), type === GridType.Link && (jsx(LinkColumn$1, { value: datum })), type === GridType.Button && (jsx(ButtonColumn$1, { rowIdx: i, columnIdx: j, value: datum, callback: callback })), type === GridType.Items && (jsx(ItemsColumn$1, { rowIdx: i, columnIdx: j, comp: items[datum] })), type === GridType.InputText && (jsx(InputColumn$1, { type: 'text', rowIdx: i, columnIdx: j, value: datum, callback: callback })), type === GridType.InputNumber && (jsx(InputColumn$1, { type: 'number', rowIdx: i, columnIdx: j, value: datum, callback: callback })), type === GridType.Array && (jsx(ArrayColumn$1, { values: datum })), type === GridType.Component && (jsx(CompColumn$1, { rowIdx: i, columnIdx: j, comp: datum }))] })) }), j));
                }) }, i));
        }) }));
};

class ArrayColumn {
    constructor({ id, type, width, name = '', className = '' }) {
        if (!id)
            throw Error('id value does not exist');
        if (type !== GridType.Array)
            throw Error('type value does not exist');
        if (typeof id !== 'string')
            throw Error('id is not of type string');
        if (typeof width !== 'undefined' && typeof width !== 'number')
            throw Error('width is not of type number');
        if (typeof name !== 'string')
            throw Error('name is not of type string');
        if (typeof className !== 'string')
            throw Error('className is not of type string');
        this.id = id;
        this.type = type;
        if (typeof width !== 'undefined')
            this.width = width;
        this.name = name;
        this.className = className;
    }
}

class ButtonColumn {
    constructor({ id, type, callback, width, name = '', className = '' }) {
        if (!id)
            throw Error('id value does not exist');
        if (type !== GridType.Button)
            throw Error('type value does not exist');
        if (!callback)
            throw Error('callback value does not exist');
        if (typeof id !== 'string')
            throw Error('id is not of type string');
        if (typeof width !== 'undefined' && typeof width !== 'number')
            throw Error('width is not of type number');
        if (typeof name !== 'string')
            throw Error('name is not of type string');
        if (typeof callback !== 'function')
            throw Error('callback is not of type function');
        if (typeof className !== 'string')
            throw Error('className is not of type string');
        this.id = id;
        this.type = type;
        if (typeof width !== 'undefined')
            this.width = width;
        this.name = name;
        this.className = className;
        this.callback = callback;
    }
}

class CheckColumn {
    constructor({ id, type, callback, width, className = '' }) {
        if (!id)
            throw Error('id value does not exist');
        if (type !== GridType.Checkbox)
            throw Error('type value does not exist');
        if (!callback)
            throw Error('callback value does not exist');
        if (typeof id !== 'string')
            throw Error('id is not of type string');
        if (typeof width !== 'undefined' && typeof width !== 'number')
            throw Error('width is not of type number');
        if (typeof callback !== 'function')
            throw Error('callback is not of type function');
        if (typeof className !== 'string')
            throw Error('className is not of type string');
        this.id = id;
        this.type = type;
        if (typeof width !== 'undefined')
            this.width = width;
        this.className = className;
        this.callback = callback;
    }
}

class CompColumn {
    constructor({ id, type, width, name = '', className = '', isSorting = false, callback = () => { } }) {
        if (!id)
            throw Error('id value does not exist');
        if (type !== GridType.Component)
            throw Error('type value does not exist');
        if (typeof id !== 'string')
            throw Error('id is not of type string');
        if (typeof width !== 'undefined' && typeof width !== 'number')
            throw Error('width is not of type number');
        if (typeof name !== 'string')
            throw Error('name is not of type string');
        if (typeof callback !== 'function')
            throw Error('callback is not of type function');
        if (typeof className !== 'string')
            throw Error('className is not of type string');
        if (typeof isSorting !== 'boolean')
            throw Error('isSorting is not of type boolean');
        this.id = id;
        this.type = type;
        if (typeof width !== 'undefined')
            this.width = width;
        this.name = name;
        this.className = className;
        this.isSorting = isSorting;
        this.callback = callback;
    }
}

class HiddenColumn {
    constructor({ id, type }) {
        if (!id)
            throw Error('id value does not exist');
        if (type !== GridType.Hidden)
            throw Error('type value does not exist');
        if (typeof id !== 'string')
            throw Error('id is not of type string');
        this.id = id;
        this.type = type;
    }
}

class ImageColumn {
    constructor({ id, type, width, name = '', className = '' }) {
        if (!id)
            throw Error('id value does not exist');
        if (type !== GridType.Image)
            throw Error('type value does not exist');
        if (typeof id !== 'string')
            throw Error('id is not of type string');
        if (typeof width !== 'undefined' && typeof width !== 'number')
            throw Error('width is not of type number');
        if (typeof name !== 'string')
            throw Error('name is not of type string');
        if (typeof className !== 'string')
            throw Error('className is not of type string');
        this.id = id;
        this.type = type;
        if (typeof width !== 'undefined')
            this.width = width;
        this.name = name;
        this.className = className;
    }
}

class InputColumn {
    constructor({ id, type, callback, width, name = '', className = '' }) {
        if (!id)
            throw Error('id value does not exist');
        if (type !== GridType.InputNumber && type !== GridType.InputText)
            throw Error('type value does not exist');
        if (!callback)
            throw Error('callback value does not exist');
        if (typeof id !== 'string')
            throw Error('id is not of type string');
        if (typeof width !== 'undefined' && typeof width !== 'number')
            throw Error('width is not of type number');
        if (typeof name !== 'string')
            throw Error('name is not of type string');
        if (typeof callback !== 'function')
            throw Error('callback is not of type function');
        if (typeof className !== 'string')
            throw Error('className is not of type string');
        this.id = id;
        this.type = type;
        if (typeof width !== 'undefined')
            this.width = width;
        this.name = name;
        this.className = className;
        this.callback = callback;
    }
}

class ItemsColumn {
    constructor({ id, type, items, width, name = '', className = '' }) {
        if (!id)
            throw Error('id value does not exist');
        if (type !== GridType.Items)
            throw Error('type value does not exist');
        if (typeof id !== 'string')
            throw Error('id is not of type string');
        if (typeof width !== 'undefined' && typeof width !== 'number')
            throw Error('width is not of type number');
        if (typeof name !== 'string')
            throw Error('name is not of type string');
        if (typeof className !== 'string')
            throw Error('className is not of type string');
        this.items = items;
        this.id = id;
        this.type = type;
        if (typeof width !== 'undefined')
            this.width = width;
        this.name = name;
        this.className = className;
    }
}

class LinkColumn {
    constructor({ id, type, width, name = '', className = '', isSorting = false, callback = () => { } }) {
        if (!id)
            throw Error('id value does not exist');
        if (type !== GridType.Link)
            throw Error('type value does not exist');
        if (!callback)
            throw Error('callback value does not exist');
        if (typeof id !== 'string')
            throw Error('id is not of type string');
        if (typeof width !== 'undefined' && typeof width !== 'number')
            throw Error('width is not of type number');
        if (typeof name !== 'string')
            throw Error('name is not of type string');
        if (typeof callback !== 'function')
            throw Error('callback is not of type function');
        if (typeof className !== 'string')
            throw Error('className is not of type string');
        if (typeof isSorting !== 'boolean')
            throw Error('isSorting is not of type boolean');
        this.id = id;
        this.type = type;
        if (typeof width !== 'undefined')
            this.width = width;
        this.name = name;
        this.className = className;
        this.isSorting = isSorting;
        this.callback = callback;
    }
}

class StringColumn {
    constructor({ id, type, width, name = '', className = '', isSorting = false, callback = () => { } }) {
        if (!id)
            throw Error('id value does not exist');
        if (type !== GridType.String)
            throw Error('type value does not exist');
        if (!callback)
            throw Error('callback value does not exist');
        if (typeof id !== 'string')
            throw Error('id is not of type string');
        if (typeof width !== 'undefined' && typeof width !== 'number')
            throw Error('width is not of type number');
        if (typeof name !== 'string')
            throw Error('name is not of type string');
        if (typeof callback !== 'function')
            throw Error('callback is not of type function');
        if (typeof className !== 'string')
            throw Error('className is not of type string');
        if (typeof isSorting !== 'boolean')
            throw Error('isSorting is not of type boolean');
        this.id = id;
        this.type = type;
        if (typeof width !== 'undefined')
            this.width = width;
        this.name = name;
        this.className = className;
        this.isSorting = isSorting;
        this.callback = callback;
    }
}

class ToggleColumn {
    constructor({ id, type, callback, width, name = '', className = '' }) {
        if (!id)
            throw Error('id value does not exist');
        if (type !== GridType.Toggle)
            throw Error('type value does not exist');
        if (!callback)
            throw Error('callback value does not exist');
        if (typeof id !== 'string')
            throw Error('id is not of type string');
        if (typeof width !== 'undefined' && typeof width !== 'number')
            throw Error('width is not of type number');
        if (typeof name !== 'string')
            throw Error('name is not of type string');
        if (typeof callback !== 'function')
            throw Error('callback is not of type function');
        if (typeof className !== 'string')
            throw Error('className is not of type string');
        this.id = id;
        this.type = type;
        if (typeof width !== 'undefined')
            this.width = width;
        this.name = name;
        this.className = className;
        this.callback = callback;
    }
}

class ColumnPropsGenerator {
    static getColumns(columns) {
        try {
            return columns.map((column, i) => {
                const { id, type, width, name, items, callback, className, isSorting } = column;
                switch (type) {
                    case GridType.Array:
                        return new ArrayColumn({ id, type, width, name, className });
                    case GridType.Button:
                        return new ButtonColumn({ id, type, callback, width, name, className });
                    case GridType.Checkbox:
                        return new CheckColumn({ id, type, callback, width, className });
                    case GridType.Hidden:
                        return new HiddenColumn({ id, type });
                    case GridType.Image:
                        return new ImageColumn({ id, type, width, name, className });
                    case GridType.InputText:
                    case GridType.InputNumber:
                        return new InputColumn({ id, type, callback, width, name, className });
                    case GridType.Items:
                        return new ItemsColumn({ id, type, items, width, name, className });
                    case GridType.Link:
                        return new LinkColumn({ id, type, width, name, className, isSorting, callback });
                    case GridType.String:
                        return new StringColumn({ id, type, width, name, className, isSorting, callback });
                    case GridType.Toggle:
                        return new ToggleColumn({ id, type, callback, width, name, className });
                    case GridType.Component:
                        return new CompColumn({ id, type, width, name, className, isSorting, callback });
                }
            });
        }
        catch (e) {
            console.error(e);
            return [];
        }
    }
}

class ScalableStorage {
    constructor({ enable, target }) {
        if (typeof enable !== 'undefined' && typeof enable !== 'boolean') {
            throw Error('enable is not of type boolean');
        }
        if (typeof target !== 'undefined' && target !== 'local' && target !== 'session') {
            throw Error('Target has an incorrect value.');
        }
        this.enable = typeof enable === 'boolean' ? enable : false;
        if (target) {
            this.target = target;
        }
    }
}
class Scalable {
    constructor({ enable, storage }) {
        if (typeof enable !== 'undefined' && typeof enable !== 'boolean') {
            throw Error('enable is not of type boolean');
        }
        this.enable = typeof enable === 'boolean' ? enable : false;
        const storageEnable = storage === true || (typeof storage === 'object' && (storage === null || storage === void 0 ? void 0 : storage.enable) === true);
        const storageProps = {
            enable: storageEnable
        };
        if (storageEnable) {
            storageProps.target = (typeof storage === 'object' && (storage === null || storage === void 0 ? void 0 : storage.target) === 'local') ? 'local' : 'session';
        }
        this.storage = new ScalableStorage(storageProps);
    }
}
class Scroll {
    constructor({ enable, type, height }) {
        if (typeof enable !== 'undefined' && typeof enable !== 'boolean') {
            throw Error('enable is not of type boolean');
        }
        if (typeof type !== 'undefined' && type !== 'inner' && type !== 'outer') {
            throw Error('verticalScroll type error');
        }
        if (typeof height !== 'undefined' && typeof height !== 'number') {
            throw Error('height is not of type number');
        }
        this.enable = !!enable;
        this.type = type ? type : 'inner';
        this.height = height ? height : 0;
    }
}
class Options {
    constructor({ scalable, fixedSize, scroll }) {
        var _a, _b;
        if (typeof fixedSize !== 'undefined' && typeof fixedSize !== 'number') {
            throw Error('fixedSize is not of type number');
        }
        const scalbleEnable = scalable === true || (typeof scalable === 'object' && (scalable === null || scalable === void 0 ? void 0 : scalable.enable) === true);
        const storageProps = !scalbleEnable
            || (typeof scalable === 'object' && scalable.storage === false)
            || (typeof scalable === 'object' && typeof (scalable === null || scalable === void 0 ? void 0 : scalable.storage) === 'object' && ((_a = scalable.storage) === null || _a === void 0 ? void 0 : _a.enable) !== true)
            ? { enable: false }
            : (typeof scalable === 'object' && typeof (scalable === null || scalable === void 0 ? void 0 : scalable.storage) === 'object' && ((_b = scalable.storage) === null || _b === void 0 ? void 0 : _b.target) === 'local')
                ? { enable: true, target: 'local' }
                : { enable: true, target: 'session' };
        this.scalable = new Scalable({ enable: scalbleEnable, storage: storageProps });
        this.fixedSize = typeof fixedSize === 'undefined' ? 0 : fixedSize;
        this.scroll = new Scroll({
            enable: scroll === null || scroll === void 0 ? void 0 : scroll.enable,
            type: scroll === null || scroll === void 0 ? void 0 : scroll.type,
            height: scroll === null || scroll === void 0 ? void 0 : scroll.height
        });
    }
}

const getColumnPrintWidth = (id, gridEl, widthList, scalable) => {
    let loopIdx = 0;
    const tableEl = gridEl.getElementsByClassName('react-grid')[0];
    const newWidthList = widthList.map((width) => {
        if (width === null)
            return null;
        const target = tableEl.firstElementChild.firstElementChild.children[loopIdx];
        loopIdx += 1;
        return target.clientWidth > 40 ? target.clientWidth : 40;
    });
    if (scalable.enable && scalable.storage.enable) {
        const target = scalable.storage.target === 'local' ? window.localStorage : window.sessionStorage;
        target.setItem(getStorageNameByWidths(id), JSON.stringify(newWidthList));
    }
    return newWidthList;
};
const getColumnWidth = (id, gridEl, columns, scalable) => {
    const tableScrollAreaWidth = gridEl.firstElementChild.clientWidth;
    const specific = columns.reduce((pur, cur) => typeof cur.width === 'undefined' ? pur : pur + cur.width, 0);
    const unspecifiedSize = columns.filter((column) => (typeof column.width === 'undefined' && column.type !== GridType.Hidden)).length;
    const baseWidth = tableScrollAreaWidth - specific < 50 ? 100 : (tableScrollAreaWidth - specific) / unspecifiedSize;
    const widthList = columns.map((column) => {
        if (column.type === GridType.Hidden)
            return null;
        return typeof (column === null || column === void 0 ? void 0 : column.width) !== 'undefined' ? column.width : baseWidth;
    });
    if (!scalable.enable || !scalable.storage.enable)
        return widthList;
    const target = scalable.storage.target === 'local' ? window.localStorage : window.sessionStorage;
    const cacheByWidth = target.getItem(getStorageNameByWidths(id));
    const vaidatedCacheWidth = cacheWidthValidation(cacheByWidth, columns.length);
    return vaidatedCacheWidth ? vaidatedCacheWidth : widthList;
};
const getColumns = (propsColumns, { sortBy, setSortBy, orderBy, setOrderBy }) => {
    const columns = ColumnPropsGenerator.getColumns(propsColumns);
    return columns.map((column) => {
        const { id, isSorting, callback } = column;
        if (isSorting) {
            column.sortingAction = () => {
                let sortOrderBy = OrderType.Default;
                if (sortBy !== id) {
                    setSortBy(id);
                    sortOrderBy = OrderType.ASC;
                }
                else {
                    if (orderBy === OrderType.Default) {
                        sortOrderBy = OrderType.ASC;
                    }
                    else if (orderBy === OrderType.ASC) {
                        sortOrderBy = OrderType.DESC;
                    }
                    else {
                        sortOrderBy = OrderType.Default;
                    }
                }
                setOrderBy(sortOrderBy);
                if (callback)
                    callback(id, sortOrderBy);
            };
        }
        return column;
    });
};
const getOptions = (options) => {
    try {
        return new Options(options);
    }
    catch (e) {
        console.error(e);
        return {
            scalable: {
                enable: false,
                storage: {
                    enable: false,
                    target: 'session'
                }
            },
            fixedSize: 0,
            scroll: {
                enable: false
            }
        };
    }
};

const ReactGrid = ({ id, rows, columns: receivedColumns, options: receivedOptions, addClassNameByRows }) => {
    const gridEl = useRef(null);
    const [updateCnt, setUpdateCnt] = useState(0);
    const [sortBy, setSortBy] = useState(null);
    const [orderBy, setOrderBy] = useState(OrderType.Default);
    const [widthList, setWidthList] = useState([]);
    const options = getOptions(receivedOptions ? receivedOptions : {});
    const columns = getColumns(receivedColumns, { sortBy, setSortBy, orderBy, setOrderBy });
    const isError = !gridDataValidation(columns, rows);
    const isOuterScroll = options.scroll.enable && options.scroll.type === 'outer';
    useEffect(() => {
        const newColumnWidth = getColumnWidth(id, gridEl.current, columns, options.scalable);
        if (widthList.length !== newColumnWidth.length
            || widthList.some((value, i) => value !== newColumnWidth[i])) {
            setWidthList(newColumnWidth);
            setUpdateCnt(updateCnt + 1);
        }
    }, [rows, receivedColumns]);
    useEffect(() => {
        if (updateCnt === 0 || options.scalable.enable === false)
            return;
        const printWidthList = getColumnPrintWidth(id, gridEl.current, widthList, options.scalable);
        const changeCheck = widthList.some((value, i) => value !== printWidthList[i]);
        if (changeCheck)
            setWidthList(printWidthList);
    }, [updateCnt]);
    const generateClassName = () => {
        const classList = [styles$3['table-area']];
        if (options.fixedSize > 0)
            classList.push('fixed-mode');
        if (isOuterScroll)
            classList.push(styles$3['table-area-outer-mode']);
        return classList.join(' ');
    };
    return (jsxs("div", Object.assign({ ref: gridEl, className: generateClassName() }, { children: [isOuterScroll && (jsx("div", Object.assign({ className: `scroll-area-outer ${styles$3['scroll-area-outer']}` }, { children: jsx("table", Object.assign({ className: `react-grid react-grid-outer ${styles$3['react-grid']} ${styles$3['react-grid-outer']}` }, { children: jsx(Thead, { tableId: id, tableEl: gridEl.current, row: rows, columns: columns, options: options, sortBy: sortBy, orderBy: orderBy, widthList: widthList, setWidthList: setWidthList, isOuter: true }) })) }))), isError ? (jsx("div", Object.assign({ className: styles$3['error-area'] }, { children: jsx("p", { children: "Data settings are incorrect" }) }))) : (jsx("div", Object.assign({ className: `${styles$3['scroll-area']} ${isOuterScroll ? styles$3['outer-mode'] : ''}`, style: !isOuterScroll && options.scroll.height > 0 ? {
                    height: `${options.scroll.height}px`,
                    overflowY: 'auto'
                } : {} }, { children: jsxs("table", Object.assign({ className: `react-grid ${styles$3['react-grid']}` }, { children: [!isOuterScroll && (jsx(Thead, { tableId: id, tableEl: gridEl.current, row: rows, columns: columns, options: options, sortBy: sortBy, orderBy: orderBy, widthList: widthList, setWidthList: setWidthList })), jsx(Tbody, { tableId: id, rows: rows, columns: columns, options: options, addClassNameByRows: addClassNameByRows, widthList: widthList })] })) })))] })));
};

export { EditType, GridType, OrderType, ReactGrid as default };
//# sourceMappingURL=index.js.map
