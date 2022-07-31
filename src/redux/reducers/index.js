import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import Events from './Events'

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    events: Events,
  })

export default reducers
