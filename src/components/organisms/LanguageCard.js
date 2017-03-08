//from CardRow

// Globals
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import CardName from '../atoms/CardName'

// Styles
const LanguageCardStyles = styled.div`
  text-align: left;
  min-width: 160px;
  min-height: 160px;
  vertical-align: top;
  background-color: #f9f9f9;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.125);

  margin: 20px 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {

    display: flex;
    justify-content: center;

    .image {
      max-width: 100px;
      max-height: 100px;
      padding-top: 15px;
    }

  }

  &.selected {
    background: rgba(69,162,152,0.125);
    box-shadow: inset 1px 2px 3px 1px rgba(0,0,0,0.125);

    &:hover {
      background: #BDE6AB;
    }
  }

  &:hover {
    background-color: #F1F0F0;
    cursor: pointer;
  }
`

export default class LanguageCard extends Component {

  render() {
    return (
      <LanguageCardStyles className={`${this.props.isSelected ? 'selected' : null}`} onClick={this.props.selectCard}>
        <div>
          <img role="presentation" className='image' src={require(`../../assets/images/logos/${this.props.pictureName}.svg`)}></img>
        </div>
        <CardName isSelected={this.props.isSelected} cardName={this.props.pictureName}/>
      </LanguageCardStyles>
    );
  }
}

LanguageCard.propTypes = {
  pictureName: React.PropTypes.string.isRequired,
  selectCard: React.PropTypes.func.isRequired,
  isSelected: React.PropTypes.bool.isRequired
};