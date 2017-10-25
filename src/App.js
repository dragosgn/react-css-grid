import React, { Component } from 'react'
import styled from 'styled-components'
import {Col, Row, Container} from './grid'


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
    <Col>
      <PerfHeader>
        <Col desktop={7} tablet={6} mobile={3}>
          <HeaderTitle><p></p></HeaderTitle>
        </Col>
        <Col desktop={5} tablet={2} mobile={1}>
          <HeaderDate><p></p></HeaderDate>
        </Col>
      </PerfHeader>
      <PerfBody>
        <Col>
          {content}
        </Col>
      </PerfBody>
      <PerfFooter>
        <Col>
        </Col>
      </PerfFooter>
    </Col>
  )
}

class App extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Row>
                <Col>
                  <h3></h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row style={{backgroundColor: "#253040", color: "white", borderRadius: "5px 5px 0 0",}}>
                    <Col desktop={1} tablet={1} mobile={4}><p>Sanitär</p></Col>
                    <DateLabel desktop={11} tablet={2} mobile={4}><p>Date</p></DateLabel>
                  </Row>
                  <Row>
                    <Col desktop={12} style={{backgroundColor: "#D3D3D3"}}>
                      <Row>
                        <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} desktop={6} tablet={4}/>
                        <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} desktop={6} tablet={4}/>
                      </Row>
                      <Row>
                        <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} desktop={6} tablet={4}/>
                        <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} desktop={6} tablet={4}/>
                      </Row>
                      <Row>
                        <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} desktop={6} tablet={4} />
                        <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} desktop={6} tablet={4}/>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    )
  }
}

export default App
