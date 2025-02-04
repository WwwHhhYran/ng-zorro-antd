/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

interface FakeViewportRect {
  left: number;
  top: number;
  width: number;
  height: number;
  bottom: number;
  right: number;
}

interface FakeViewportSize {
  width: number;
  height: number;
}

interface FakeViewportScrollPosition {
  top: number;
  left: number;
}

/**
 * @internal
 * @deprecated Internal use only, do not use directly. Will be removed in v20
 */
export class FakeViewportRuler {
  getViewportRect(): FakeViewportRect {
    return {
      left: 0,
      top: 0,
      width: 1014,
      height: 686,
      bottom: 686,
      right: 1014
    };
  }

  getViewportSize(): FakeViewportSize {
    return { width: 1014, height: 686 };
  }

  getViewportScrollPosition(): FakeViewportScrollPosition {
    return { top: 0, left: 0 };
  }
}
