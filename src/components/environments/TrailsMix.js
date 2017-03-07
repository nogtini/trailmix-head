// from Index

// Globals
import React, { Component } from 'react';
import styled from 'styled-components'

// Components
import Header from '../ecosystems/Header';
import Takeahike from '../ecosystems/Takeahike';

// Styles
const TrailsMixStyles = styled.div`
    display: flex;
    flex-direction: column;
    background: #D8F8B7;
`

export default class TrailsMix extends Component {
  render() {
    return (
      <TrailsMixStyles>
        <Header />
        <Takeahike />
      </TrailsMixStyles>
    );
  }
}
