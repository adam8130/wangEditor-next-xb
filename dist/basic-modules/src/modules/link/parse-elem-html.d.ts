/**
 * @description parse html
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor-next/core';
import { Descendant } from 'slate';
import { DOMElement } from '../../utils/dom';
import { LinkElement } from './custom-types';
declare function parseHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): LinkElement;
export declare const parseHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseHtml;
};
export {};
