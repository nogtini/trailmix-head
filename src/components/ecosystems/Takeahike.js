//from App

// Globals
import React, { Component } from 'react';
import styled from 'styled-components'

// Components
import CardRow from '../ecosystems/CardRow';

// Styles
const TakeahikeStyles = styled.div`
  margin-top: 50px;
  display: flex;
`
const flexLeft = styled.div`
  flex: 1;
`
const flexRight = styled.div`
  flex: 1;
`
const flexMiddle = styled.div`
  flex: 6;
`
export default class Takeahike extends Component {
  render() {
    return (
      <TakeahikeStyles>
        <flexLeft></flexLeft>
        <flexMiddle>
          <CardRow type="router"/>
          <CardRow type="taskrunner" />
          <CardRow type="frontend"/>
          <CardRow type="auth"/>
        </flexMiddle>
        <flexRight></flexRight>
      </TakeahikeStyles>
    );
  }
}