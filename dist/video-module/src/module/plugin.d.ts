/**
 * @description editor 插件，重写 editor API
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor-next/core';
declare function withVideo<T extends IDomEditor>(editor: T): T;
export default withVideo;
