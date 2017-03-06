import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as trailmixReducers from './reducers';

export default combineReducers({
  routing: routerReducer,
  trailmixReducers
})