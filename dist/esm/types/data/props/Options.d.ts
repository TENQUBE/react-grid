import { IPropsOptions, IPropsScalableOption, IPropsStorageOption, IVerticalScroll } from "../../../lib/interfaces";
declare class ScalableStorage {
    readonly enable: boolean;
    readonly target?: 'local' | 'session';
    constructor({ enable, target }: IPropsStorageOption);
}
declare class Scalable {
    readonly enable: boolean;
    readonly storage: ScalableStorage;
    constructor({ enable, storage }: IPropsScalableOption);
}
declare class Options {
    readonly scalable: Scalable;
    readonly fixedSize: number;
    readonly verticalScroll: IVerticalScroll;
    constructor({ scalable, fixedSize, verticalScroll }: IPropsOptions);
}
export default Options;
