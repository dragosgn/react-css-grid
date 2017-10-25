import React, { Component } from 'react'
import styled from 'styled-components'
import {Col, Row, Container} from './grid'

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          This is a row inside a container
        </Row>
        <Row>
          <Col desktop={3} tablet={4} mobile={4}>
            <p>Column</p>
            <Row>
              Row
            </Row>
            <Row>
              <Col desktop={6}>
                Column
              </Col>
              <Col desktop={6}>
                Column
              </Col>
            </Row>
          </Col>
          <Col desktop={3} tablet={4} mobile={4}>
            <p>Column</p>
          </Col>
          <Col desktop={3} tablet={4} mobile={4}>
            <p>Column</p>
          </Col>
          <Col desktop={3} tablet={4} mobile={4}>
            <p>Column</p>
          </Col>
        </Row>
        <Row>
          <Col desktop={1}>
            Col
          </Col>
          <Col desktop={1}>
            Col
          </Col>
          <Col desktop={1}>
            Col
          </Col>
          <Col desktop={1}>
            Col
          </Col>
          <Col desktop={1}>
            Col
          </Col>
          <Col desktop={1}>
            Col
          </Col>
          <Col desktop={1}>
            Col
          </Col>
          <Col desktop={1}>
            Col
          </Col>
          <Col desktop={1}>
            Col
          </Col>
          <Col desktop={1}>
            Col
          </Col>
          <Col desktop={1}>
            Col
          </Col>
          <Col desktop={1}>
            Col
          </Col>
        </Row>
        <Row>
          Row
        </Row>
        <Row>
          Row
        </Row>
        <Row>
          Row
        </Row>
        <Row>
          Row
        </Row>
      </Container>
    )
  }
}

export default App
