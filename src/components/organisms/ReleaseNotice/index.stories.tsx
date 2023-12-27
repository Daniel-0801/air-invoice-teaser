import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { ReleaseNotice } from "components/organisms/ReleaseNotice"

export default {
  component: ReleaseNotice,
} as ComponentMeta<typeof ReleaseNotice>

const Template: ComponentStory<typeof ReleaseNotice> = args => <ReleaseNotice {...args} />

export const Normal = Template.bind({})
