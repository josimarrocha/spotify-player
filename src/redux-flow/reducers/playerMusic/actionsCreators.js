import axios from 'axios'
import { TrackHandler, Client } from 'spotify-sdk'

export const IS_FETCHING = 'IS_FETCHING'
export const ERROR_FETCH = 'ERROR_FEETCH'
export const COMPLETE_FETCH = 'COMPLETE_FETCH'
export const COMPLETE_SONG = 'COMPLETE_SONG'
export const IS_COMPLETED_SONG = 'IS_COMPLETED_SONG'

let client = Client.instance;
client.settings = {
  clientId: '17a4cb5c72134093bd478c10e7610ca6',
  secretId: 'bb3fe92fc11c441d870e25041917475a',
  scopes: ['user-follow-modify user-follow-read user-library-read user-top-read'],
  redirect_uri: 'http://localhost:3000'
}

export const checkSignIn = () => (dispatch) => {
  if (sessionStorage.token) {
    client.token = sessionStorage.token
  } else if (window.location.hash.split('&')[0].split('=')[1]) {
    sessionStorage.token = window.location.hash.split('&')[0].split('=')[1]
    client.token = sessionStorage.token
  } else {
    client.login()
      .then(url => {
        window.location.href = url
      })
  }
}

export const search = (trackName) => async (dispatch) => {
  dispatch({ type: IS_FETCHING })
  let track = new TrackHandler()
  try {
    const tracksCollections = await track.search(trackName, { limit: 5 })
    dispatch({ type: COMPLETE_FETCH, payload: tracksCollections })
  } catch (err) {
    dispatch({ type: ERROR_FETCH, err })
  }
}

export const playTrack = (songId) => (dispatch) => {
  dispatch({ type: IS_COMPLETED_SONG })
  axios.get(`https://api.spotify.com/v1/tracks/${songId}`, {
    headers: { 'Authorization': `Bearer ${client.token}` }
  })
    .then(response => {
      dispatch({ type: COMPLETE_SONG, payload: response.data })
    })
    .catch(error => console.log(error))
}