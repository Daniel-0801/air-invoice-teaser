import { HEADER_NAVBAR_HEIGHT_SP_PX } from "components/sizes"

// アコーディオン開閉
export const toggleAccordion = (event: React.MouseEvent<HTMLElement>) => {
  event.preventDefault()
  const _this = event.currentTarget

  const parentTarget = _this.nextElementSibling as HTMLElement
  const childTarget = parentTarget?.firstElementChild as HTMLElement

  if (!_this.classList.contains("active")) {
    const targetHeight = childTarget?.clientHeight
    parentTarget.style.height = `${targetHeight}px`

    _this.classList.add("rotate")

    setTimeout(function () {
      _this.classList.add("active")
      parentTarget.style.height = "auto"
    }, 300)
    return
  } else {
    const targetHeight = childTarget?.clientHeight
    parentTarget.style.height = `${targetHeight}px`

    _this.classList.remove("rotate")

    setTimeout(function () {
      _this.classList.remove("active")
      parentTarget.style.height = "0"
    }, 1)
    return
  }
}

//SP時アコーディオンコンテンツ内のcloseボタン用
export const closeAccordion = (event: React.MouseEvent<HTMLElement>) => {
  event.preventDefault()
  const _this = event.currentTarget

  // toggleAccordionで付与したactiveとrotateを削除してアコーディオンを閉じる
  const currentAccordion = _this.closest(".jsTargetContainer")?.previousElementSibling
  const parentTarget = currentAccordion?.nextElementSibling as HTMLElement
  const childTarget = parentTarget?.firstElementChild as HTMLElement

  const targetHeight = childTarget?.clientHeight
  parentTarget.style.height = `${targetHeight}px`

  currentAccordion?.classList.remove("rotate")

  setTimeout(function () {
    currentAccordion?.classList.remove("active")
    parentTarget.style.height = "0"
  }, 1)

  // closeボタンで閉じたアコーディオンをスムースで画面トップに表示
  const position = currentAccordion?.getBoundingClientRect()
  if (position) {
    window.scrollTo({
      top: position.top + window.pageYOffset - HEADER_NAVBAR_HEIGHT_SP_PX,
      behavior: "smooth",
    })
  }
}
