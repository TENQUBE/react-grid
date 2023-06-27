export declare const columnStyles: (widthList: Array<number | null>, fixedSize: number, columnIdxByNotHidden: number, width: number) => {
    left: number;
    width: number;
} | {
    width: number;
    left?: undefined;
};
export declare const fixedLeftResize: (fixedSize: number, tableId: string, setSize: number, idx: number) => void;
