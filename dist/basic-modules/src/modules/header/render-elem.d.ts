/**
 * @description render header
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor-next/core';
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
declare const renderHeader1Conf: {
    type: string;
    renderElem: (elemNode: SlateElement, children: VNode[] | null, _editor: IDomEditor) => VNode;
};
declare const renderHeader2Conf: {
    type: string;
    renderElem: (elemNode: SlateElement, children: VNode[] | null, _editor: IDomEditor) => VNode;
};
declare const renderHeader3Conf: {
    type: string;
    renderElem: (elemNode: SlateElement, children: VNode[] | null, _editor: IDomEditor) => VNode;
};
declare const renderHeader4Conf: {
    type: string;
    renderElem: (elemNode: SlateElement, children: VNode[] | null, _editor: IDomEditor) => VNode;
};
declare const renderHeader5Conf: {
    type: string;
    renderElem: (elemNode: SlateElement, children: VNode[] | null, _editor: IDomEditor) => VNode;
};
declare const renderHeader6Conf: {
    type: string;
    renderElem: (elemNode: SlateElement, children: VNode[] | null, _editor: IDomEditor) => VNode;
};
export { renderHeader1Conf, renderHeader2Conf, renderHeader3Conf, renderHeader4Conf, renderHeader5Conf, renderHeader6Conf, };
