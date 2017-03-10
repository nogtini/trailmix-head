//from Takeahike

// Globals
import React, { Component } from 'react';
import styled from 'styled-components'

// Styles
const InfoIconStyled = styled.div`
  opacity: 0.41;
  font-family: FontAwesome;
  color: #7ABD9D;
  line-height: 54px;
  text-shadow: 0 -1px 0 #9FBE8E, 0 0 2px white;

  margin-right: 25px;
  margin-top: 75px;

  &:hover {
    color: #61967D;
    cursor: pointer;
  }
`

export default class InfoIcon extends Component {
  render() {
    return (
      <InfoIconStyled>
        <i className="fa fa-info-circle fa-3x"></i>
      </InfoIconStyled>
    );
  }
}