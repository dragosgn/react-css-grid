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
  padding: ${props => props.nogutter ? 0 : 0.5}rem;

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
  border-radius: 5px 5px 0 0;
`

const PerfBody = styled(Row)`
  min-height: 300px;
  background-color: white;
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
          {content}
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
`

const HeaderMenu = styled(Row)`

`


const HeaderComponent = () => {
  return (
    <HeaderRoot>
      <Col col={3} style={{color: "white"}}><h2>Logo</h2></Col>
      <Col col={8} style={{color: "white"}}>
        <Row>
          <Col col={4} style={{color: "white"}}><p>LEISTUNGSÜBERSICHT</p></Col>
          <Col col={3} style={{color: "white"}}><p>WERBEKAMPAGNEN</p></Col>
          <Col col={2} style={{color: "white"}}><p>ANFRAGEN</p></Col>
          <Col col={3} style={{color: "white"}}><p>BADRECHNER</p></Col>
        </Row>
      </Col>
      <Col col={3} style={{backgroundColor: "white", borderRadius: "5px 5px 5px 5px"}}>

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
                <Row style={{backgroundColor: "#253040", color: "white", borderRadius: "5px 5px 0 0"}}>
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
