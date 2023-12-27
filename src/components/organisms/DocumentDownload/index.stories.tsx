import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { DocumentDownload } from "components/organisms/DocumentDownload"

export default {
  component: DocumentDownload,
} as ComponentMeta<typeof DocumentDownload>

const Template: ComponentStory<typeof DocumentDownload> = args => <DocumentDownload {...args} />

export const Normal = Template.bind({})
