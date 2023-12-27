// SafariでscrollToのbehaviorが未対応のため追加
import "scroll-behavior-polyfill"

export const scrollToId = (destinationId: string, offset = 0) => {
  scrollTo(`#${destinationId}`, offset)
}

export const scrollTo = (selector: string, offset = 0) => {
  const element = document.querySelector(selector)
  if (element === null) {
    throw new Error("Cannot get an element from given selector: " + selector)
  }

  const elementTop = getAbsoluteTopPosition(element)
  window.scrollTo({
    top: elementTop - offset,
    behavior: "smooth",
  })
}

const getAbsoluteTopPosition = (element: Element) => {
  const elementTop = element.getBoundingClientRect().top
  const bodyTop = document.body.getBoundingClientRect().top
  return elementTop - bodyTop
}
