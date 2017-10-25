import styled, {css}  from 'styled-components'

//  Grid
const mobileGutter = "0.5rem"
const tabletGutter = "1rem"
const desktopGutter = "1rem"

export const baseContainer = css`
  width: 100%;
  max-width: 1200px;
  padding: ${desktopGutter};
  @media (max-device-width: 1200px) {
    padding: ${desktopGutter};
  };
  @media (max-device-width: 900px) {
    padding: ${tabletGutter};
  };
  @media (max-device-width: 600px) {
    padding: ${mobileGutter};
  };
  margin-left: auto;
  margin-right: auto;
`

export const Container = styled.div`
  ${baseContainer}
`

export const baseColumn = css`
  float: left;
  min-height: 0.1rem;
  width: calc(100% * (${props => props.desktop ? props.desktop : 12} / 12));
  padding-left: ${props => props.nogutter ? 0 : desktopGutter};
  padding-right: ${props => props.nogutter ? 0 : desktopGutter};
  padding-top: -${desktopGutter};
  padding-bottom: -${desktopGutter};
  @media (max-device-width: 1200px) {
    width: calc(100% * (${props => props.desktop ? props.desktop : 12} / 12));
    padding-left: ${desktopGutter};
    padding-right: ${desktopGutter};
    padding-top: -${desktopGutter};
    padding-bottom: -${desktopGutter};
  };
  @media (max-device-width: 900px) {
    width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
    padding-left: ${tabletGutter};
    padding-right: ${tabletGutter};
    padding-top: -${tabletGutter};
    padding-bottom: -${tabletGutter};
  };
  @media (max-device-width: 600px) {
    width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
    padding-left: ${mobileGutter};
    padding-right: ${mobileGutter};
    padding-top: -${mobileGutter};
    padding-bottom: -${mobileGutter};
  };
`

export const Col = styled.div`
  ${baseColumn}
`

export const baseRow = css`
  min-height: 0.1rem;
  display: flex;
  flex-wrap: wrap;
  margin-right: -${desktopGutter};
  margin-left: -${desktopGutter};
  @media (max-device-width: 1140px) {
    margin-right: -${desktopGutter};
    margin-left: -${desktopGutter};
  };
  @media (max-device-width: 900px) {
    margin-right: -${tabletGutter};
    margin-left: -${tabletGutter};
  };
  @media (max-device-width: 600px) {
    margin-right: -${mobileGutter};
    margin-left: -${mobileGutter};
  };
  `
export const Row = styled.div`
  ${baseRow};
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
