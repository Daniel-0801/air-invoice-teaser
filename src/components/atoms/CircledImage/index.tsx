import React from "react"
import styled from "styled-components"

const Container = styled.div<{ imageSize: number }>`
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
`

const Image = styled.img``

interface CircledImageProps {
  readonly className?: string
  readonly image: {
    readonly src: string
    readonly alt: string
    readonly size: number
    readonly height: number
  }
}

export const CircledImage: React.VFC<CircledImageProps> = props => {
  const { className, image } = props

  return (
    <Container className={className} imageSize={image.size}>
      <Image src={image.src} alt={image.alt} width={image.size} height={image.height} />
    </Container>
  )
}
