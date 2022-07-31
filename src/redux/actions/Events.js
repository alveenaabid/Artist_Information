import axios from 'axios'
import { SET_ARTIST_INFO, SET_EVENTS } from '../../Shared/ActionTypes'

export const setEvent = (data) => {
  return (dispatch) =>
    dispatch({
      type: SET_EVENTS,
      payload: data,
    })
}

export const getEvent = (name) => {
  return (dispatch) => {
    const config = {
      method: 'get',
      url: `https://rest.bandsintown.com/artists/${name}/events?app_id=abc`,
      headers: {
        Accept: 'application/json',
      },
      timeout: 5000,
    }

    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          dispatch(setEvent(response.data))
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

export const setArtistInfo = (data) => {
  return (dispatch) =>
    dispatch({
      type: SET_ARTIST_INFO,
      payload: data,
    })
}

export const getArtistInfo = (search) => {
  return (dispatch) => {
    const config = {
      method: 'get',
      url: `https://rest.bandsintown.com/artists/${search}?app_id=abc`,
      headers: {
        Accept: 'application/json',
      },
      timeout: 5000,
    }

    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          if (response.data) {
            dispatch(setArtistInfo(response.data))
          } else {
          }
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
