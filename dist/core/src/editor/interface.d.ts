/**
 * @description editor interface
 * @author wangfupeng
 */
import ee from 'event-emitter';
import { Ancestor, Editor, Element, Location, Node } from 'slate';
import { AlertType, IEditorConfig, IMenuConfig, ISingleMenuConfig } from '../config/interface';
import { IPositionStyle } from '../menus/interface';
import { DOMElement } from '../utils/dom';
export type ElementWithId = Element & {
    id: string;
};
export type getMenuConfigReturnType<K> = K extends keyof IMenuConfig ? IMenuConfig[K] : ISingleMenuConfig;
/**
 * 扩展 slate Editor 接口
 */
export interface IDomEditor extends Editor {
    insertData: (data: DataTransfer) => void;
    setFragmentData: (data: Pick<DataTransfer, 'getData' | 'setData'>) => void;
    getConfig: () => IEditorConfig;
    getMenuConfig: <K extends string>(menuKey: K) => getMenuConfigReturnType<K>;
    getAllMenuKeys: () => string[];
    alert: (info: string, type: AlertType) => void;
    handleTab: () => void;
    getHtml: () => string;
    getText: () => string;
    getSelectionText: () => string;
    getElemsByTypePrefix: (typePrefix: string) => ElementWithId[];
    getElemsByType: (type: string, isPrefix?: boolean) => ElementWithId[];
    getParentNode: (node: Node) => Ancestor | null;
    isEmpty: () => boolean;
    clear: () => void;
    dangerouslyInsertHtml: (html: string, isRecursive?: boolean) => void;
    setHtml: (html: string) => void;
    id: string;
    isDestroyed: boolean;
    isFullScreen: boolean;
    focus: (isEnd?: boolean) => void;
    isFocused: () => boolean;
    blur: () => void;
    updateView: () => void;
    destroy: () => void;
    scrollToElem: (id: string) => void;
    showProgressBar: (progress: number) => void;
    hidePanelOrModal: () => void;
    enable: () => void;
    disable: () => void;
    isDisabled: () => boolean;
    toDOMNode: (node: Node) => HTMLElement;
    fullScreen: () => void;
    unFullScreen: () => void;
    getEditableContainer: () => DOMElement;
    select: (at: Location) => void;
    deselect: () => void;
    move: (distance: number, reverse?: boolean) => void;
    moveReverse: (distance: number) => void;
    restoreSelection: () => void;
    getSelectionPosition: () => Partial<IPositionStyle>;
    getNodePosition: (node: Node) => Partial<IPositionStyle>;
    isSelectedAll: () => boolean;
    selectAll: () => void;
    on: (type: string, listener: ee.EventListener) => void;
    off: (type: string, listener: ee.EventListener) => void;
    once: (type: string, listener: ee.EventListener) => void;
    emit: (type: string, ...args: any[]) => void;
    undo?: () => void;
    redo?: () => void;
}
