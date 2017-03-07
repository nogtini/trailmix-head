// from TrailsMix

// Globals
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

// Components
import CommandLine from '../molecules/CommandLine';
import Title from '../molecules/Title';

// Styles
const HeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 75px;
  background: linear-gradient(white, #D7F9B4);
`

// Utils
import { parseSelections } from '../../utils/parsingService';

function mapPropsToState(state) {
  return {
    selectedTaskRunner: state.selectedTaskRunner,
    selectedFrontEnd: state.selectedFrontEnd,
    selectedRouter: state.selectedRouter,
    selectedAuth: state.selectedAuth,
  };
}

class Header extends Component {
  render() {
    const {
      selectedTaskRunner,
      selectedFrontEnd,
      selectedRouter,
      selectedAuth
    } = this.props;

    const allSelections = {
      taskRunner: selectedTaskRunner,
      frontEnd: selectedFrontEnd,
      router: selectedRouter,
      auth: selectedAuth
    };

    const commandLine = parseSelections(allSelections);
    console.log('commandLine', commandLine);

    return (
      <HeaderStyles>
        <Title />
        <CommandLine text={commandLine} />
      </HeaderStyles>
    );
  }
}

export default connect(mapPropsToState)(Header);
