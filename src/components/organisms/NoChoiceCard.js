//from CardRow

// Globals
import React, { Component } from 'react';
import styled, {css} from 'styled-components'

// Styles
const NoChoiceCardStyled = styled.div`
  text-align: left;
  min-width: 160px;
  min-height: 160px;
  vertical-align: top;
  background-color: #f9f9f9;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.125);

  margin: 20px 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: #E4E4E4;
    line-height: 102px;
    text-shadow: 0 -1px 0 #9FBE8E, 0 0 2px white;
  }
  
  ${props => props.selected ? css`
    background: rgba(69,162,152,0.125);
    box-shadow: inset 1px 2px 3px 1px rgba(0,0,0,0.125);
  
    &:hover {
    background: #BDE6AB;
    }
  
    i {
    color: #B7DFA6;
    }
  ` : null}

  &:hover {
    background-color: #F1F0F0;
    cursor: pointer;
  }
`

export default class NoChoiceCard extends Component {
  render() {
    return (
      <NoChoiceCardStyled selected={Object.keys(this.props.selectedCards).length === 0} onClick={this.props.selectNoChoiceCard}>
        <i className={`fa fa-times-circle fa-5x`}></i>
      </NoChoiceCardStyled>
    );
  }
}

NoChoiceCard.propTypes = {
  selectedCards: React.PropTypes.object.isRequired,
  selectNoChoiceCard: React.PropTypes.func.isRequired
};