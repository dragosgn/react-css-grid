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
  width: calc(100% * (${props => props.col} / 12));
  padding: 0.5rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
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
  border-radius:
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
        <Col col={12}>
          {content}
        </Col>
      </PerfBody>
      <PerfFooter>
        <Col>

        </Col>
      </PerfFooter>
    </PerfRoot>
  )
}

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col={12}>
            <Row>
              <h1 style={{color: "#253040"}}>LEISTUNGSÜBERSICHT</h1>
            </Row>
            <Row>
              <Col col={12}>
                <Row style={{backgroundColor: "#253040", color: "white"}}>
                  <Col col={1}><p>Sanitär</p></Col>
                  <Col col={11}><p>26.04.2013 - 19.10.2017</p></Col>
                </Row>
                <Row>
                  <Col col={12} style={{backgroundColor: "#D3D3D3"}}>
                    <Row>
                      <h1>SERVICECENTER</h1>
                    </Row>
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
