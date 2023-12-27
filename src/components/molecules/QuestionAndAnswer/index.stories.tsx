import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { QuestionAndAnswer } from "components/molecules/QuestionAndAnswer"

export default {
  component: QuestionAndAnswer,
} as ComponentMeta<typeof QuestionAndAnswer>

const Template: ComponentStory<typeof QuestionAndAnswer> = args => <QuestionAndAnswer {...args} />

export const Normal = Template.bind({})
Normal.args = {
  question: "質問質問質問質問質問質問質問質問質問質問質問質問質問質問",
  answer: "回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答\n二行目の回答",
}

export const Notes = Template.bind({})
Notes.args = {
  question: "質問質問質問質問質問質問質問質問質問質問質問質問質問質問",
  answer: "回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答\n二行目の回答",
  notes: ["test", "test"],
}
