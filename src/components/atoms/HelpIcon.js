// from CommandLine

// Globals
import React, { Component } from 'react';
import styled from 'styled-components'

// Styles
const HelpIconStyled = styled.i`
  color: #CFCFCF;
  line-height: 37px;
  text-shadow: 0 -1px 0 #9FBE8E, 0 0 2px white;

  &:hover {
    color: darkgrey;
    cursor: pointer;
  }
`

export default class HelpIcon extends Component {
  render() {
    return (
      <div>
        <HelpIconStyled className={`fa fa-question-circle fa-lg`}></HelpIconStyled>
      </div>
    );
  }
}