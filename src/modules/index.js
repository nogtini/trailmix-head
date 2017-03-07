import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as trailmixReducers from './reducers';

export default combineReducers({
  routing: routerReducer,
  selectedTaskRunner: trailmixReducers.selectedTaskRunner,
  selectedFrontEnd: trailmixReducers.selectedFrontEnd,
  selectedRouter: trailmixReducers.selectedRouter,
  selectedAuth: trailmixReducers.selectedAuth
})