//from Takeahike

// Globals
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

// Components
import LanguageCard from '../organisms/LanguageCard';
import InfoIcon from '../atoms/InfoIcon';
import NoChoiceCard from '../organisms/NoChoiceCard';

// Styles
const CardRowStyles = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`

const LanguageCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const MainDescription = styled.div`
  text-align: center;
  font-weight: bold;
  font-family: "Dosis";
  font-size: 24pt;
  color: #3A5465;
  margin-bottom: 15px;
`

// Redux
import { selectTaskRunnerCard, selectFrontEndCard, selectRouterCard, selectAuthCard, selectNoChoiceCard } from '../../modules/actions';

// Utils
import data from '../../utils/cardData';
//import parsingService from '../../utils/parsingService';

function mapPropsToState(state) {
  console.log(state)
  return {
    selectedTaskRunner: state.selectedTaskRunner,
    selectedFrontEnd: state.selectedFrontEnd,
    selectedRouter: state.selectedRouter,
    selectedAuth: state.selectedAuth,
  };
}


class CardRow extends Component {

  render() {
    const {
      dispatch,
      selectedTaskRunner,
      selectedFrontEnd,
      selectedRouter,
      selectedAuth
    } = this.props;


    const selectFunc = () => {
      switch (this.props.type) {
        case 'taskrunner':
          return selectTaskRunnerCard;
        case 'frontend':
          return selectFrontEndCard;
        case 'router':
          return selectRouterCard;
        case 'auth':
          return selectAuthCard;

        default:
          return;
      }
    };

    const reducerType = ((type) => {
      switch (this.props.type) {
        case 'taskrunner':
          return selectedTaskRunner;
        case 'frontend':
          return selectedFrontEnd;
        case 'router':
          return selectedRouter;
        case 'auth':
          return selectedAuth;

        default:
          return;
      }
    })(this.props.type);


    return (
      <div>
        <MainDescription>{data[this.props.type].description.main}</MainDescription>
        <CardRowStyles>
          <InfoIcon />
          <LanguageCardContainer>
            <NoChoiceCard selectedCards={reducerType} selectNoChoiceCard={ () => {dispatch(selectNoChoiceCard(this.props.type))} } />
            {data[this.props.type].tools.map(function (item, id) {
              return (
                <LanguageCard
                  pictureName={item}
                  key={id}
                  isSelected={reducerType[item] ? true : false}
                  selectCard={() => {dispatch(selectFunc()(item))}}
                />
              )
            })}
          </LanguageCardContainer>
        </CardRowStyles>
      </div>
    );
  }
}

CardRow.propTypes = {
  type: React.PropTypes.string.isRequired
};

export default connect(mapPropsToState)(CardRow);
