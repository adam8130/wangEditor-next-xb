/**
 * @description justify menu entry
 * @author wangfupeng
 */
import JustifyCenterMenu from './JustifyCenterMenu';
import JustifyJustifyMenu from './JustifyJustifyMenu';
import JustifyLeftMenu from './JustifyLeftMenu';
import JustifyRightMenu from './JustifyRightMenu';
export declare const justifyLeftMenuConf: {
    key: string;
    factory(): JustifyLeftMenu;
};
export declare const justifyRightMenuConf: {
    key: string;
    factory(): JustifyRightMenu;
};
export declare const justifyCenterMenuConf: {
    key: string;
    factory(): JustifyCenterMenu;
};
export declare const justifyJustifyMenuConf: {
    key: string;
    factory(): JustifyJustifyMenu;
};
