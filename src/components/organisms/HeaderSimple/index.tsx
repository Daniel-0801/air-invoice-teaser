import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"
import { HEADER_FOOTER_MAX_WIDTH_PX } from "components/sizes"

import { InvoiceLogo } from "components/atoms/InvoiceLogo"

import { PageName } from "functions/adobeAnalytics/common"
import { createURLWithParameters, Parameter } from "functions/url"

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 42px;
  background-color: ${COLOR.main};
  padding: 0 16px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${HEADER_FOOTER_MAX_WIDTH_PX}px;
`

interface HeaderSimpleProps {
  readonly pageName: PageName
}

export const HeaderSimple: React.VFC<HeaderSimpleProps> = props => {
  const parameters: Parameter[] = [
    {
      key: "ref",
      value: props.pageName + "_header",
    },
  ]
  return (
    <Container>
      <Content>
        <InvoiceLogo path={createURLWithParameters("/", parameters)} width={128} height={20} />
      </Content>
    </Container>
  )
}
