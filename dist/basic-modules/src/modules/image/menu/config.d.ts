/**
 * @description 图片菜单配置
 * @author wangfupeng
 */
import { ImageElement } from '../custom-types';
export declare function genImageMenuConfig(): {
    /**
     * 插入图片之后的回调
     * @param imageElem ImageElement
     */
    onInsertedImage(_imageElem: ImageElement): void;
    /**
     * 更新图片之后的回调
     * @param node image node
     */
    onUpdatedImage(_node: ImageElement | null): void;
    /**
     * 检查图片信息，支持 async fn
     * @param src image src
     * @param alt image alt
     * @param href image href
     */
    checkImage(_src: string, _alt: string, _href: string): boolean | string | undefined;
    /**
     * parse image src
     * @param src image src
     * @returns new src
     */
    parseImageSrc(src: string): string;
};
