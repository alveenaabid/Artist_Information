import { SET_ARTIST_INFO, SET_EVENTS } from '../../Shared/ActionTypes'

const initialSettings = {
  events: [],
  artistInfo: {},
}

const Events = (state = initialSettings, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      }

    case SET_ARTIST_INFO:
      return {
        ...state,
        artistInfo: action.payload,
      }

    default:
      return state
  }
}

export default Events
