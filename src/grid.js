import React from 'react'
import styled, {css}  from 'styled-components'

//  Grid
const mobileGutter = "0.5rem"
const tabletGutter = "1rem"
const desktopGutter = "1rem"

export const baseContainer = css`
  max-width: 1200px;
  width:100%;
  margin-left: auto;
  margin-right: auto;
  * {
    box-sizing: border-box;
  }
`
export const Container = styled.div`
  ${baseContainer};
`

export const baseColumn = css`
  float: left;
  min-height: 0.1rem;
  width: calc(100% * (${props => props.desktop ? props.desktop : 12} / 12));
  padding: ${desktopGutter};
  @media (max-device-width: 1200px) {
    width: calc(100% * (${props => props.desktop ? props.desktop : 12} / 12));
    padding: ${desktopGutter};
  };
  @media (max-device-width: 900px) {
    width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
    padding: ${tabletGutter};
  }
  @media (max-device-width: 600px) {
    width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
    padding: ${mobileGutter};
  };
`

export const Col = styled.div`
  ${baseColumn};
  border: 1px solid red;
  `


export const baseRow = css`
  min-height: 0.1rem;
  display: flex;
  flex-wrap: wrap;
  `
export const Row = styled.div`
  ${baseRow};
  border: 1px solid green;
`
// ------- End of the Grid -------

// ------- Template media queries -------

const sizes = {
	desktop: 1140,
	tablet: 768,
	mobile: 376
}

export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`
	return acc
}, {})

// ------- End of template media queries -------
