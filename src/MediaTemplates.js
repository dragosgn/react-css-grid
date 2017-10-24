import React from 'react'
import styled, {css} from 'styled-components'


const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
}

// Iterate and create media templagte

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})


const Content = styled.div`
  height: 3em;
  width: 3em;
  background: papayawhip;

  ${media.desktop`background: dodgerblue`}
  ${media.tablet`background: dodgerblue`}
  ${media.phone`background: dodgerblue`}

`



export default Content
