import React, { Component } from 'react';
import styled from 'styled-components'


//  Grid

const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
`

const Col = styled.div`
  float:left;
  min-height: 0.5rem;
  width: calc(100% * (${props => props.desktop ? props.desktop : 12} / 12));
  padding-left: ${props => props.nogutter ? 0 : 1}rem;
  padding-right: ${props => props.nogutter ? 0 : 1}rem;
  /* Mobile Responsivness */

  /* ----------- iPhone 4 and 4S ----------- */
  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Portrait */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

    /* Landscape */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Portrait */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Landscape */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */

  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 667px)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Portrait */
  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 667px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Landscape */
  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 667px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* ----------- iPhone 6+, 7+ and 8+ ----------- */

  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 414px)
    and (max-device-width: 736px)
    and (-webkit-min-device-pixel-ratio: 3) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Portrait */
  @media only screen
    and (min-device-width: 414px)
    and (max-device-width: 736px)
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Landscape */
  @media only screen
    and (min-device-width: 414px)
    and (max-device-width: 736px)
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* ----------- iPhone X ----------- */

  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 812px)
    and (-webkit-min-device-pixel-ratio: 3) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Portrait */
  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 812px)
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Landscape */
  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 812px)
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }
  /* ----------- Galaxy S3 ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Portrait */
  @media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 2)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Landscape */
  @media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 2)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* ----------- Galaxy S4, S5 and Note 3 ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Portrait */
  @media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Landscape */
  @media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* ----------- Galaxy S6 ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 4) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Portrait */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 4)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 4)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }


  /* ----------- Google Pixel ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Portrait */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* ----------- Google Pixel XL ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 4) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Portrait */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 4)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

  /* Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 4)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
      padding: ${props => props.nogutter ? 0 : 0.5}rem;
      padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }


  @media all and (max-width:800px){
    width: calc(100% * (${props => props.tablet ? props.tablet : 12} / 12));
  };
  @media  and (max-width:650px){
    width: calc(100% * (${props => props.mobile ? props.mobile : 12} / 12));
    padding: ${props => props.nogutter ? 0 : 0.5}rem;
    padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  }

`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 0.5rem;
  @media all and (max-width:800px){
    flex-wrap: wrap;
  }
  @media all and (max-width:650px){
    flex-wrap: wrap;
  }
`

// Grid
const PerfHeader = styled(Row)`
  background-color: #253040;
  color: white;
  padding: 0.5rem;
  border-radius: 5px 5px 0 0;
`

const PerfBody = styled(Row)`
  min-height: 300px;
  background-color: white;
  padding: 0.5rem;
`

const PerfFooter = styled(Row)`
  background-color: #253040;
  border-radius: 0 0 5px 5px;
  padding: 0.5rem;
`

const PerfRoot = styled.div`
  margin-top: 1rem;
`

const HeaderTitle = styled(Row)`

`

const HeaderDate = styled(Row)`
  justify-content: flex-end;
`

const PerformanceComponent = ({title, content}) => {
  return(
    <PerfRoot>
      <PerfHeader>
        <Col desktop={7} mobile={2}>
          <HeaderTitle>{title}</HeaderTitle>
        </Col>
        <Col desktop={5}>
          <HeaderDate>26.04.2013 - 19.10.2017</HeaderDate>
        </Col>
      </PerfHeader>
      <PerfBody>
      </PerfBody>
      <PerfFooter>
        <Col>
        </Col>
      </PerfFooter>
    </PerfRoot>
  )
}


const HeaderRoot = styled(Row)`
  background-color: #9DC02E;
  padding: 1rem;
  align-items: flex-end;
  min-height: 3rem;
  @media all and (max-width:650px){
    padding: 1rem 0 1rem 0;
  }
`

const HeaderMenu = styled(Row)`
  justify-content: flex-end;
  align-items: baseline;
  @media all and (max-width:650px){

  }
`

const MenuItem = styled(Col)`
  cursor: pointer;
  color: white;
  padding-bottom: 0px;
  @media all and (max-width:650px){
    color: grey;
    background-color: white;
  }

`

const Logo = styled(Col)`
  @media all and (max-width:650px){
    display: none;
  }
`

const Profile = styled(Col)`
  @media all and (max-width:650px){
    display: none;
  }
`

const HeaderComponent = () => {
  return (
    <HeaderRoot>
      <Logo desktop={1} style={{desktopor: "white"}}><h2>Logo</h2></Logo>
      <Col desktop={10} mobile={12} nogutter>
        <HeaderMenu>
          <MenuItem ><p>LEISTUNGSÜBERSICHT</p></MenuItem>
          <MenuItem desktop={3}><p>WERBEKAMPAGNEN</p></MenuItem>
          <MenuItem desktop={3}><p>BADRECHNER</p></MenuItem>
          <MenuItem desktop={3}><p>BADRECHNER</p></MenuItem>
        </HeaderMenu>
      </Col>
      <Profile desktop={1} mobile={12} desktop-md={12} style={{backgroundColor: "white", borderRadius: "5px 5px 5px 5px", minWidth: "200px", paddingTop:"1rem", paddingBottom:"1rem"}}>
        <h2>Profile</h2>
      </Profile>
    </HeaderRoot>
  )
}

class App extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent />
        <Row>
          <Col>
            <Row>
              <h1 style={{color: "#253040", paddingTop:"1rem", paddingBottom:"1rem"}}>LEISTUNGSÜBERSICHT</h1>
            </Row>
            <Row>
              <Col nogutter>
                <Row style={{backgroundColor: "#253040", color: "white", borderRadius: "5px 5px 0 0", padding: "1rem"}}>
                  <Col desktop={1}><p>Sanitär</p></Col>
                  <Col desktop={11}><p>26.04.2013 - 19.10.2017</p></Col>
                </Row>
                <Row>
                  <Col desktop={12} style={{backgroundColor: "#D3D3D3"}}>
                    <Row>
                      <Col><h1>SERVICECENTER</h1></Col>
                    </Row>
                    <Row>
                      <Col desktop={6} tablet={12} mobile={12}>
                        <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} />
                      </Col>
                      <Col desktop={6} desktop-md={12}>
                        <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} />
                      </Col>
                    </Row>
                    <Row>
                      <Col desktop={6} desktop-md={12}>
                        <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} />
                      </Col>
                      <Col desktop={6} desktop-md={12}>
                        <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} />
                      </Col>
                    </Row>
                    <Row>
                      <Col desktop={6} desktop-md={12}>
                        <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} />
                      </Col>
                      <Col desktop={6}>
                        <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
