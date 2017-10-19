import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1140px;
  background-color: blue;
  margin-right: auto;
  margin-left: auto;
`

// const Grid = styled.div`
//   > div {
//     width: calc(100% / ${props => props.col});
//     margin-left: 1rem;
//     :first-child {
//       margin-left: 0px;
//     }
//   }
//   display: flex;
//   flex-direction: row;
// `

const Grid = styled.div`
  width: 100%;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  background-color: yellow;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Grid col={3}>
          <Col>
            <Row><h1>Row</h1></Row>
            <Row>Row</Row>
            <Row>Row</Row>
          </Col>
          <Col>
            <Row><h1>Row</h1></Row>
            <Row>Row</Row>
            <Row>Row</Row>
          </Col>
          <Col>
            <Row><h1>Row</h1></Row>
            <Row>Row</Row>
            <Row>Row</Row>
          </Col>
        </Grid>
        <Col>
          <Row><h1>Row</h1></Row>
          <Row>Row</Row>
          <Row>Row</Row>
        </Col>
      </Container>
    )
  }
}

export default App;
