import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  float:left;
  min-height: 0.5rem;
  width: calc(100% * (${props => props.col ? props.col : 12} / 12));
  @media all and (max-width:800px){
    width: calc(100% * (${props => props.colmd ? props.colmd : 12} / 12));
  };
  @media all and (max-width:650px){
    width: calc(100% * (${props => props.colsm ? props.colsm : 12} / 12));
    padding-left: ${props => props.nogutter ? 0 : 0.5}rem;
    padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
  };
  padding-left: ${props => props.nogutter ? 0 : 1}rem;
  padding-right: ${props => props.nogutter ? 0 : 1}rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 0.5rem;
  @media all and (max-width:800px){
    flex-wrap: wrap;
  };
  @media all and (max-width:650px){
    flex-wrap: wrap;
  };
  /*-- our cleafix hack -- */
  .row:before,
    .row:after {
        content:"";
        display: table ;
        clear:both;
    }
`

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
        <Col col={7}>
          <HeaderTitle>{title}</HeaderTitle>
        </Col>
        <Col col={5}>
          <HeaderDate>26.04.2013 - 19.10.2017</HeaderDate>
        </Col>
      </PerfHeader>
      <PerfBody>
        <Col col={1}>
        </Col>
        <Col col={1} />
        <Col col={1} />
        <Col col={1} />
        <Col col={1} />
        <Col col={1} />
        <Col col={1} />
        <Col col={1} />
        <Col col={1} />
        <Col col={1} />
        <Col col={1} />
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
      <Logo col={1} colsm={12} colmd={12} style={{color: "white"}}><h2>Logo</h2></Logo>
      <Col col={10} colsm={12} colmd={12} nogutter>
        <HeaderMenu>
          <MenuItem col={3} colsm={12} colmd={12}><p>LEISTUNGSÜBERSICHT</p></MenuItem>
          <MenuItem col={3} colsm={12} colmd={12}><p>WERBEKAMPAGNEN</p></MenuItem>
          <MenuItem col={3} colsm={12} colmd={12}><p>BADRECHNER</p></MenuItem>
          <MenuItem col={3} colsm={12} colmd={12}><p>BADRECHNER</p></MenuItem>
        </HeaderMenu>
      </Col>
      <Profile col={1} colsm={12} colmd={12} style={{backgroundColor: "white", borderRadius: "5px 5px 5px 5px", minWidth: "200px", paddingTop:"1rem", paddingBottom:"1rem"}}>
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
          <Col col={12}>
            <Row>
              <h1 style={{color: "#253040", paddingTop:"1rem", paddingBottom:"1rem"}}>LEISTUNGSÜBERSICHT</h1>
            </Row>
            <Row>
              <Col col={12} nogutter>
                <Row style={{backgroundColor: "#253040", color: "white", borderRadius: "5px 5px 0 0", padding: "1rem"}}>
                  <Col col={1}><p>Sanitär</p></Col>
                  <Col col={11}><p>26.04.2013 - 19.10.2017</p></Col>
                </Row>
                <Row>
                  <Col col={12} style={{backgroundColor: "#D3D3D3"}}>
                    <Row>
                      <Col><h1>SERVICECENTER</h1></Col>
                    </Row>
                    <Row />
                    <Row />
                    <Row>
                      <Col col={6} colmd={12}>
                        <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} />
                      </Col>
                      <Col col={6} colmd={12}>
                        <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} />
                      </Col>
                    </Row>
                    <Row>
                      <Col col={6} colmd={12}>
                        <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} />
                      </Col>
                      <Col col={6} colmd={12}>
                        <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} />
                      </Col>
                    </Row>
                    <Row>
                      <Col col={6} colmd={12}>
                        <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} />
                      </Col>
                      <Col col={6}>
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
