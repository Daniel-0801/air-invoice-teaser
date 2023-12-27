import { Link } from "gatsby"
import React from "react"
import { slide as Menu } from "react-burger-menu"
import styled, { css } from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT, SMALL_DEVICE_MAX_WIDTH_PX } from "components/sizes"

import { DocumentRequestButtonHeader } from "components/atoms/DocumentRequestButtonHeader"
import { SvgBottomArrowIcon } from "components/atoms/Icon/BottomArrowIcon"
import { InvoiceAndRecruitLogo } from "components/atoms/InvoiceAndRecruitLogo"
import { LoginButton } from "components/atoms/LoginButton"
import { HeaderInternalProps } from "components/organisms/Header/types"

import { toggleAccordion } from "functions/accordion"
import { createURLWithParameters } from "functions/url"
import "./hamburgerMenu.css"

const LogoAndButton = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  background-color: ${COLOR.white};
  align-items: center;
  padding: 8px 16px;
  box-shadow: inset 0px -1px 0px ${COLOR.graySilver};
`

const StyledDocumentRequestButtonHeader = styled(DocumentRequestButtonHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(235, 112, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px -3px 0px inset;
  border-radius: 6px;
  color: #fff;
  height: 40px;
  padding: 10px 14px;
  margin-left: 18px;
`

const NavBar = styled.div`
  position: sticky;
  top: 56px;
  z-index: 1;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  background-color: ${COLOR.main};
`

const QuestionAndAnswerItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 20px;
  white-space: nowrap;
`

const QuestionTitle = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${COLOR.white};
  transition: 0.3s;
`

const Arrow = styled.span`
  display: flex;
  align-items: center;
  color: ${COLOR.white};
  transform: rotate(0deg);
  transition: 0.3s;
`

const AnswerInner = styled.div`
  height: 0;
  overflow: hidden;
  transition: 0.3s;
`

const QuestionContainer = styled.button`
  width: 100%;
  cursor: pointer;
  @media (max-width: ${BREAK_POINT.w768}px) {
  }
  @media (hover: hover) {
    &.rotate {
      &:hover {
        ${QuestionTitle} {
          color: ${COLOR.black87};
        }
        ${Arrow} {
          color: ${COLOR.black60};
        }
      }
    }
  }

  &.rotate {
    ${Arrow} {
      transform: rotate(-180deg);
    }
  }

  &.active {
    + ${AnswerInner} {
      height: auto;
      transition: 0.3s;
    }
  }
`

const PageLinkList = styled.ul`
  @media (max-width: ${SMALL_DEVICE_MAX_WIDTH_PX}px) {
    justify-content: flex-start;
  }
`

const PageLinkItem = styled.li<{ isCurrent: boolean }>`
  ${props =>
    props.isCurrent
      ? css`
          color: ${COLOR.white};
        `
      : css`
          color: ${COLOR.white};
          padding-bottom: 12px;
        `}
  border-bottom: 1px solid rgba(255, 255, 255,0.3);
  padding: 20px;
  white-space: nowrap;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

const StyledLoginButton = styled(LoginButton)`
  white-space: nowrap;
  padding: 20px;
  justify-content: left;
  color: ${COLOR.white};
`

const HamburgerMenu = styled.div``

const AccordionInner = styled.div`
  width: 100%;
`

const AccordionTextItem = styled.div`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

const ChildPageLinkList = styled.ul``

const ChildPageLinkItem = styled.li<{ isCurrent: boolean }>`
  padding: 12px 16px;
  cursor: pointer;
`

const StyledChildLink = styled(Link)``

export const SmallHeader: React.VFC<HeaderInternalProps> = props => {
  const { queryParameter, pages, AccordionPages, currentPath, loginOnClick, inquiryOnClick } = props

  return (
    <>
      <LogoAndButton>
        <InvoiceAndRecruitLogo path={createURLWithParameters("/", queryParameter)} width={145} height={32} />
        <StyledDocumentRequestButtonHeader
          path={createURLWithParameters("/document_request/", queryParameter)}
          onClick={inquiryOnClick}
          ButtonTitle="資料ダウンロード"
        />
        <HamburgerMenu id="outer-container">
          <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right>
            <NavBar id="page-wrap">
              <QuestionAndAnswerItem>
                <QuestionContainer type="button" onClick={toggleAccordion}>
                  <QuestionTitle>
                    特長
                    <Arrow>
                      <SvgBottomArrowIcon size={12} />
                    </Arrow>
                  </QuestionTitle>
                </QuestionContainer>
                <AnswerInner className="jsTargetContainer">
                  <AccordionInner>
                    <AccordionTextItem>
                      <ChildPageLinkList>
                        {AccordionPages.map(AccordionPage => (
                          <ChildPageLinkItem key={AccordionPage.path} isCurrent={AccordionPage.path === currentPath}>
                            <StyledChildLink to={createURLWithParameters(AccordionPage.path, queryParameter)}>
                              – {AccordionPage.name}
                            </StyledChildLink>
                          </ChildPageLinkItem>
                        ))}
                      </ChildPageLinkList>
                    </AccordionTextItem>
                  </AccordionInner>
                </AnswerInner>
              </QuestionAndAnswerItem>
              <PageLinkList>
                {pages.map(page => (
                  <Link key={page.path} to={createURLWithParameters(page.path, queryParameter)}>
                    <PageLinkItem isCurrent={page.path === currentPath}>{page.name}</PageLinkItem>
                  </Link>
                ))}
                <StyledLoginButton className="primary-button" onClick={loginOnClick} />
              </PageLinkList>
            </NavBar>
          </Menu>
        </HamburgerMenu>
      </LogoAndButton>
    </>
  )
}
