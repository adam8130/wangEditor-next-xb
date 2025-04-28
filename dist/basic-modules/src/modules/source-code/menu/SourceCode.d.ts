/**
 * @description undo menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor-next/core';
declare class SourceCode implements IButtonMenu {
    title: string;
    iconSvg: string;
    tag: string;
    active: boolean;
    getValue(_editor: IDomEditor): string | boolean;
    isActive(_editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, _value: string | boolean): void;
    private sourceCodeMode;
    private parseHtmlToCode;
    private parseCodeToHtml;
}
export default SourceCode;
