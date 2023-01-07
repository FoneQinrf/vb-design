/**
 * 文档总高度
 * @param ref
 * @returns
 */
function getScrollHeight(ref: Element | any) {
  let height = 0;
  const arr: Array<HTMLBaseElement> = Array.from(ref.children);
  arr.forEach((element: HTMLBaseElement) => {
    height += element.offsetHeight;
  });
  return height;
}

/**
 * 滑动视口的高度
 * @param ref
 * @returns
 */
function getWindowHeight(ref: Element | any) {
  let windowHeight = 0;
  if (ref) {
    windowHeight = ref.clientHeight;
  }
  return windowHeight;
}
/**
 * 滚动条在Y轴上的滚动距离
 * @param ref
 * @returns
 */
function getScrollTop(ref: Element | any) {
  let scrollTop = 0;
  let bodyScrollTop = 0;
  let documentScrollTop = 0;
  if (ref) {
    bodyScrollTop = ref.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
  return Math.ceil(scrollTop);
}

export const useScroll = (ele: EventTarget, gap = 0) => {
  const height = getScrollTop(ele) + getWindowHeight(ele);
  return height >= getScrollHeight(ele) - gap;
};
