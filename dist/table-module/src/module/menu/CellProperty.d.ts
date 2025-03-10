import { IButtonMenu, IDomEditor } from '@wangeditor-next/core';
import TableProperty from './TableProperty';
declare class CellProperty extends TableProperty implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 20 20\"><path d=\"m11.105 18-.17 1H2.5A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1h15A1.5 1.5 0 0 1 19 2.5v9.975l-.85-.124-.15-.302V8h-5v4h.021l-.172.351-1.916.28-.151.027c-.287.063-.54.182-.755.341L8 13v5h3.105zM2 12h5V8H2v4zm10-4H8v4h4V8zM2 2v5h5V2H2zm0 16h5v-5H2v5zM13 7h5V2h-5v5zM8 2v5h4V2H8z\" opacity=\".6\"/><path d=\"m15.5 11.5 1.323 2.68 2.957.43-2.14 2.085.505 2.946L15.5 18.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L15.5 11.5zM13 6a1 1 0 0 1 1 1v3.172a2.047 2.047 0 0 0-.293.443l-.858 1.736-1.916.28-.151.027A1.976 1.976 0 0 0 9.315 14H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm-1 2H8v4h4V8z\"/></svg>";
    readonly tag = "button";
    readonly showModal = true;
    readonly modalWidth = 300;
    readonly menu = "cell";
    getModalContentNode(editor: IDomEditor): import("slate").NodeEntry<import("../../utils").WithType<import("packages/custom-types").CustomElement>>;
}
export default CellProperty;
