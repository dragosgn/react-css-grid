import React, { Component } from 'react'
import styled from 'styled-components'
import {Col, Row, Container} from './grid'


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const Th = styled.th`
  background: #333;
  color: white;
  font-weight: bold;
  padding: 6px;
  border: 1px solid #ccc;
  text-align: left;
`

const Td = styled.td`
  padding: 6px;
  border: 1px solid #ccc;
  text-align: left;
`



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
        <Row>
          <Column>
            <table>
              <thead>
                <tr>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Job Title</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>James</Td>
                  <Td>Matman</Td>
                  <Td>Chief Decoration officer</Td>
                </tr>
                <tr>
                  <Td>The</Td>
                  <Td>Tick</Td>
                  <Td>Crimefighter Sorta</Td>
                </tr>
              </tbody>
            </table>
          </Column>
        </Row>
      </Container>
    )
  }
}

export default App
