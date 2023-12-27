import * as React from "react"
import styled from "styled-components"

import { COLOR } from "components/color"

import ArrowWhiteImage from "images/icon/right-arrow-icon.svg"

const Button = styled.button`
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  padding: 16px 56px;
  color: ${COLOR.white};
  background: right 16px center / 16px 16px no-repeat;
  background-color: ${COLOR.main};
  background-image: url(${ArrowWhiteImage});
  border: none;
  border-radius: 100px;
  text-decoration: none;
  box-shadow: 0px 3px 6px ${COLOR.black14}, 0px 2px 3px ${COLOR.black12};

  &:hover {
    opacity: 0.6;
  }

  &:active {
    box-shadow: 0 0;
    transform: translate(0, 3px);
  }
`

interface FileDownloadButtonProps {
  readonly children: React.ReactNode // 表示させる文言
  readonly downloadFilePath: string // ダウンロード対象のファイル
  readonly onClick: () => void
}

export const FileDownloadButton: React.VFC<FileDownloadButtonProps> = props => {
  return (
    <a href={props.downloadFilePath} target="_blank" rel="noopener noreferrer" onClick={props.onClick}>
      <Button>{props.children}</Button>
    </a>
  )
}
