import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

const Container = styled.div`
  text-align: left;
`

const Note = styled.p<{ color: string; marginBetweenNotes: string }>`
  font-size: 12px;
  color: ${props => props.color};
  white-space: pre-wrap;
  :not(:first-child) {
    margin-top: ${props => props.marginBetweenNotes};
  }
`

export interface NotesProps {
  readonly className?: string
  readonly notes: React.ReactNode[]
  readonly color?: string
  readonly marginBetweenNotes?: string // 注意書き同士の幅
}

export const Notes: React.VFC<NotesProps> = props => {
  const { className, notes, color = COLOR.black60, marginBetweenNotes = "4px" } = props
  return (
    <Container className={className}>
      {notes.map((note, index) => {
        return (
          <Note key={index} color={color} marginBetweenNotes={marginBetweenNotes}>
            {note}
          </Note>
        )
      })}
    </Container>
  )
}
