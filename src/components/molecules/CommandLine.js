// from Header

// Globals
import React, { Component } from 'react';
import styled from 'styled-components'

// Components
import BashDollar from '../atoms/BashDollar';
import HelpIcon from '../atoms/HelpIcon';
import CommandText from '../atoms/CommandText';

// Styles
const CommandLineStyles = styled.div`
  width: 600px;
  height: 50px;

  margin: 40px 0;

  background: #F9F9F9;
  box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.10);
  font-family: Input-Regular;
  font-size: 24px;
  color: #797979;
  line-height: 35px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FlexContainer = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
`


export default class CommandLine extends Component {
  render() {
    return (
      <CommandLineStyles>
        <FlexContainer>
          <BashDollar />
          <CommandText text={this.props.text} />
        </FlexContainer>
        <FlexContainer>
          <HelpIcon />
        </FlexContainer>
      </CommandLineStyles>
    );
  }
}
