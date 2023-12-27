import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { BREAK_POINT } from "components/sizes"

import { ClientLabel } from "components/atoms/ClientLabel"
import { RightArrowIcon } from "components/atoms/Icon"

const StyledClientLabel = styled(ClientLabel)`
  font-size: 11px;
`

export type Position = "top" | "case"

const StepContainer = styled.li`
  width: calc(50% - 12px);
  display: flex;
  flex-direction: column;

  &:nth-child(2n) {
    margin-left: 24px;
  }

  &:nth-child(3) {
    justify-content: left;
  }

  &:hover {
    opacity: 0.6;
  }

  &:active {
    box-shadow: 0 0;
    transform: translate(0, 1px);
  }

  @media (max-width: ${BREAK_POINT.w1024}px) {
    width: auto;
    &:nth-child(2n) {
      margin-left: 0;
    }
  }

  @media (max-width: ${BREAK_POINT.w768}px) {
    :not(:first-child) {
      margin-top: 48px;
    }
  }
`

const ImageContainer = styled.div`
  margin: 0 auto;
`

const DescriptionContainer = styled.div`
  position: relative;
  max-width: 448px;
  padding: 16px 20px 20px 20px;
  margin: 0 auto;
  margin-top: -32px;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: ${BREAK_POINT.w768}px) {
    max-width: calc(100% - 40px);
    padding: 20px;
    flex-direction: column;
    align-items: flex-end;
  }

  @media (max-width: ${BREAK_POINT.w1024}px) {
  }
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 7px;
`

const Caption = styled.p`
  font-size: 20px;
  color: ${COLOR.main};
  margin-bottom: 16px;
  line-height: 32px;
  font-weight: 600;

  @media (max-width: ${BREAK_POINT.w768}px) {
    font-size: 20px;
  }
`

const ShopNameWrap = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 16px;
`

const Labels = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

const DetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: auto;
  gap: 4px;
`
const DetailText = styled.p`
  color: ${COLOR.main};
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
`

export interface ClientItemProps {
  readonly path: string
  src: string
  alt: string
  title: string
  shopName: string
  labels: string[]
}

export const ClientItem: React.VFC<ClientItemProps> = props => {
  const { src, alt, path, title, shopName, labels } = props
  return (
    <StepContainer>
      <Link to={path}>
        <ImageContainer>
          <Image src={src} alt={alt} width={496} height={338} />
        </ImageContainer>
        <DescriptionContainer>
          <Caption>{title}</Caption>
          <ShopNameWrap>{shopName}</ShopNameWrap>
          <Labels>
            {labels?.map((label, index) => (
              <StyledClientLabel key={index}>{label}</StyledClientLabel>
            ))}
            <DetailWrapper>
              <DetailText>詳しくみる</DetailText>
              <RightArrowIcon size={16} fill={COLOR.main} />
            </DetailWrapper>
          </Labels>
        </DescriptionContainer>
      </Link>
    </StepContainer>
  )
}
