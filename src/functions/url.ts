export interface Parameter {
  readonly key: string
  readonly value: string
}

export const createURLWithParameters = (baseLink: string, parameters: Parameter[]) => {
  return parameters.length
    ? baseLink + "?" + parameters.map(parameter => `${parameter.key}=${encodeURIComponent(parameter.value)}`).join("&")
    : baseLink
}

// FV内でURLを生成するメソッド
export const createURLWithParametersOnFV = (baseLink: string) => {
  return baseLink
}
