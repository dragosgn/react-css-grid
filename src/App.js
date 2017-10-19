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
  min-height: 5px;
  width: calc(100% * (${props => props.col ? props.col : 1} / 12));
  padding-left: ${props => props.nogutter ? 0 : 0.5}rem;
  padding-right: ${props => props.nogutter ? 0 : 0.5}rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 5px;
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
`

const PerfRoot = styled(Col)`
`

const PerformanceComponent = ({title, content}) => {
  return(
    <PerfRoot col={12}>
      <PerfHeader>
        <Col col={7}>{title}</Col>
        <Col col={5}>26.04.2013 - 19.10.2017</Col>
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
`

const HeaderMenu = styled(Row)`
  justify-content: flex-end;
  align-items: baseline;
`

const MenuItem = styled(Col)`
  width: max-content;
  cursor: pointer;
  color: white;
  padding-bottom: 0px;
`


const HeaderComponent = () => {
  return (
    <HeaderRoot>
      <Col col={1} style={{color: "white"}}><h2>Logo</h2></Col>
      <Col col={10}>
        <HeaderMenu>
          <MenuItem col={4} ><p>LEISTUNGSÜBERSICHT</p></MenuItem>
          <MenuItem col={3} ><p>WERBEKAMPAGNEN</p></MenuItem>
          <MenuItem col={3} ><p>BADRECHNER</p></MenuItem>
          <MenuItem col={3} ><p>BADRECHNER</p></MenuItem>
        </HeaderMenu>
      </Col>
      <Col col={1} style={{backgroundColor: "white", borderRadius: "5px 5px 5px 5px", minWidth: "200px"}}>
        <h2>Profile</h2>
      </Col>
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
              <h1 style={{color: "#253040"}}>LEISTUNGSÜBERSICHT</h1>
            </Row>
            <Row>
              <Col col={12}>
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
                    <Row />
                    <Row />
                    <Row>
                      <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} />
                      <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} />
                    </Row>
                    <Row>
                      <PerformanceComponent title={"Anfragenverteilung nach Status"} content={"Clock"} />
                      <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} />
                    </Row>
                    <Row>
                      <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} />
                      <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} />
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
