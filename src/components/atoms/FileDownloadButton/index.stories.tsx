import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { FileDownloadButton } from "components/atoms/FileDownloadButton"

export default {
  component: FileDownloadButton,
} as ComponentMeta<typeof FileDownloadButton>

const Template: ComponentStory<typeof FileDownloadButton> = args => <FileDownloadButton {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: "ダウンロードボタン",
  // 空のファイルをダウンロード
  downloadFilePath: "サンプル.pdf",
}
