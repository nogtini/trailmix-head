// from Header

// Globals
import React, { Component } from 'react';
import styled from 'styled-components'

// Styles
const TitleStyles = styled.div`
  display: flex;
  justify-content: center;
`
const Logo = styled.img`
  height: 125px;
  display: inline-block;
`
const MixHolder = styled.div`
  font-weight: 800;
  font-size: 130px;
  color: #3F864F;
  line-height: 60px;
  margin-left: 5px;
  
  text-align: center;
  font-family: 'dosis';
  display: inline-block;
  
  span {
    color: #C2E8AD;
    text-shadow: 0 -1px 0 #9FBE8E, 0 0 2px white;
  }
`

export default class Title extends Component {
  render() {
    return (
      <TitleStyles>
        <Logo src={require('../../assets/images/logo.svg')} />
        <MixHolder>
          <span>mix</span>
        </MixHolder>
      </TitleStyles>
    );
  }
}