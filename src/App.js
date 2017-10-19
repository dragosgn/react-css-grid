import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1140px;
  background-color: blue;
  margin-right: auto;
  margin-left: auto;
`

const Grid = styled.div`
  width: 100%;

`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  width: calc(100% * (${props => props.col} / 12));
  margin: 0 1rem 0 1rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  background-color: yellow;
  margin: 0.5rem 0 0.5rem 0;
`



const PerfHeader = styled(Row)`

`

const PerfBody = styled(Row)`
  min-height: 200px;
`

const PerfFooter = styled(Row)``

const PerformanceComponent = ({title, content}) => {
  return(
    <Col col={12}>
      <PerfHeader>
        <Col col={4}>{title}</Col>
        <Col col={4}></Col>
        <Col col={4}>Date</Col>
      </PerfHeader>
      <PerfBody>
        <Col col={12}>
          {content}
        </Col>
      </PerfBody>
      <PerfFooter></PerfFooter>
    </Col>
  )
}

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col={12}>
            <Row>
              <h1>LEISTUNGSÜBERSICHT</h1>
            </Row>
            <Row>
              <Col col={12}>
                <Row>
                  <Col col={1}><p>Sanitär</p></Col>
                  <Col col={11}><p>Date</p></Col>
                </Row>
                <Row>
                  <Col col={12}>
                    <Row>
                      <h1>SERVICECENTER</h1>
                    </Row>
                    <Row>
                      <Col col={6}>

                      </Col>
                      <Col col={6}>

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
