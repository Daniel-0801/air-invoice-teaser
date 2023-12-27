import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT, HEADER_FOOTER_MAX_WIDTH_PX } from "components/sizes"

import { DocumentRequestButtonHeader } from "components/atoms/DocumentRequestButtonHeader"
import { SvgBottomArrowIcon } from "components/atoms/Icon/BottomArrowIcon"
import { InquiryButton } from "components/atoms/InquiryButton"
import { InvoiceAndRecruitLogo } from "components/atoms/InvoiceAndRecruitLogo"
import { TaglineBar } from "components/molecules/TaglineBar"
import { HeaderInternalProps } from "components/organisms/Header/types"

import { toggleAccordion } from "functions/accordion"
import { createURLWithParameters } from "functions/url"

const NavBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${COLOR.white};
  box-shadow: 0px 4px 4px ${COLOR.black20};
  padding: 24px 32px;

  @media (max-width: ${BREAK_POINT.w1024}px) {
    padding: 24px 12px;
  }
`

const Container = styled.div`
  width: calc(100% - 32px);
  max-width: ${HEADER_FOOTER_MAX_WIDTH_PX}px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${BREAK_POINT.w1024}px) {
  }
`

const Contents = styled.div`
  display: flex;
  padding-left: 1.6vw;
  line-height: 36px;

  @media (max-width: ${BREAK_POINT.w1024}px) {
    margin-left: 0;
  }
`

const ChildPageLinkList = styled.ul`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
`

const PageLinkList = styled.ul`
  display: flex;
  align-items: center;
`

const PageLinkItem = styled.li<{ isCurrent: boolean }>`
  color: ${props => (props.isCurrent ? COLOR.main : COLOR.black87)};
  font-size: 14px;
  /* margin-left: 24px; */
  padding-left: 1.6vw;
  white-space: nowrap;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

const ChildPageLinkItem = styled.li<{ isCurrent: boolean }>`
  padding: 12px 20px;
  background-color: ${props => (props.isCurrent ? COLOR.main05 : COLOR.white)};
  white-space: nowrap;
  cursor: pointer;

  &:first-child {
    border-bottom: 1px solid #eee;
  }

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

const StyledChildLink = styled(Link)``

const StyledLink = styled(Link)`
  position: relative;

  ::after {
    position: absolute;
    top: -100%;
    right: -10%;
    bottom: -100%;
    left: -10%;
    z-index: 1;
    content: "";
    background-color: transparent;
    cursor: pointer;
  }
`

const StyledInquiryButton = styled(InquiryButton)`
  display: flex;
  height: 40px;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid ${COLOR.main};
  background-color: ${COLOR.white};
  box-shadow: ${COLOR.main} 0px -3px 0px inset;
  padding: 0.9vh 1.8vw;
  color: ${COLOR.main};

  @media (max-width: ${BREAK_POINT.w1024}px) {
    font-size: 1.2vw;
    padding: 0.9vh 1vw;
  }
`

const StyledDocumentRequestButtonHeader = styled(DocumentRequestButtonHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(235, 112, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px -3px 0px inset;
  border-radius: 6px;
  margin: 0 1.1vw;
  color: #fff;
  white-space: nowrap;
  font-size: 12px;
  height: 40px;
  padding: 0.9vh 1.1vw;

  @media (max-width: ${BREAK_POINT.w1024}px) {
    font-size: 1.2vw;
    padding: 0.9vh 1.3vw;
  }
`

const QuestionAndAnswerItem = styled.div`
  max-width: 48px;
`

const QuestionTitle = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${COLOR.black87};
  font-size: 14px;
  line-height: 26px;
  transition: 0.3s;
  white-space: nowrap;
`

const Arrow = styled.span`
  display: flex;
  align-items: center;
  color: ${COLOR.main};
  transform: rotate(0deg);
  transition: 0.3s;
  margin-left: 8px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    margin-left: 13px;
  }
`

const AnswerInner = styled.div`
  height: 0;
  overflow: hidden;
  transition: 0.3s;
  position: absolute;
  transform: translateX(-70%);
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.12));
  margin-top: 12px;
`

const QuestionContainer = styled.button`
  width: 100%;
  cursor: pointer;
  @media (max-width: ${BREAK_POINT.w768}px) {
  }
  @media (hover: hover) {
    &:hover {
      ${QuestionTitle} {
        color: ${COLOR.main};
      }
      ${Arrow} {
        color: ${COLOR.main};
      }
    }

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

const AccordionInner = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 3px 3px 0px 0px;
  padding: 12 20px;
  @media (max-width: ${BREAK_POINT.w768}px) {
    padding: 20px 16px;
  }
`

const AccordionTextItem = styled.div`
  color: ${COLOR.black87};
  font-size: 14px;
  line-height: 24px;
  @media (max-width: ${BREAK_POINT.w768}px) {
  }
`

export const LargeHeader: React.VFC<HeaderInternalProps> = props => {
  const { queryParameter, pages, AccordionPages, currentPath, loginOnClick, questionOnClick, inquiryOnClick } = props

  return (
    <>
      <TaglineBar questionOnClick={questionOnClick} onClick={loginOnClick} />
      <NavBar>
        <Container>
          <InvoiceAndRecruitLogo width={235} height={52} path={createURLWithParameters("/", queryParameter)} />
          <Contents>
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
                            {AccordionPage.name}
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
                <PageLinkItem key={page.path} isCurrent={page.path === currentPath}>
                  <StyledLink to={createURLWithParameters(page.path, queryParameter)}>{page.name}</StyledLink>
                </PageLinkItem>
              ))}
            </PageLinkList>
            <StyledDocumentRequestButtonHeader
              path={createURLWithParameters("/document_request/", queryParameter)}
              onClick={inquiryOnClick}
              ButtonTitle="資料ダウンロード"
            />
            <StyledInquiryButton
              path={createURLWithParameters("/inquiry", queryParameter)}
              onClick={inquiryOnClick}
              ButtonTitle="お問い合わせ"
            />
          </Contents>
        </Container>
      </NavBar>
    </>
  )
}
