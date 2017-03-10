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
const FlexLeft = styled.div`
  flex: 1;
`
const FlexRight = styled.div`
  flex: 1;
`
const FlexMiddle = styled.div`
  flex: 6;
`

export default class Takeahike extends Component {
  render() {
    return (
      <TakeahikeStyles>
        <FlexLeft></FlexLeft>
        <FlexMiddle>
          <CardRow type="router"/>
          <CardRow type="taskrunner" />
          <CardRow type="frontend"/>
          <CardRow type="auth"/>
        </FlexMiddle>
        <FlexRight></FlexRight>
      </TakeahikeStyles>
    );
  }
}