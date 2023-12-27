import { useBreakpoint } from "gatsby-plugin-breakpoints"
import * as React from "react"
import styled from "styled-components"

import { CaseLargeKeyVisual } from "./CaseLargeKeyVisual"
import { CaseSmallKeyVisual } from "./CaseSmallKeyVisual"

const Container = styled.div``

export type MainVisual = "sanukis" | "labo-verde" | "arashio"

export interface CaseInternalKeyVisual {
  readonly className?: string
  readonly mainVisual: MainVisual
  readonly cardDescription: string
  readonly storeName: string
  readonly labels?: string[]
}

export const CaseVisual: React.VFC<CaseInternalKeyVisual> = props => {
  const breakpoint = useBreakpoint()
  return (
    <>
      <Container className={props.className}>
        {breakpoint.sp ? (
          <CaseSmallKeyVisual
            mainVisual={props.mainVisual}
            cardDescription={props.cardDescription}
            storeName={props.storeName}
            labels={props.labels}
          />
        ) : (
          <CaseLargeKeyVisual {...props} />
        )}
      </Container>
    </>
  )
}
