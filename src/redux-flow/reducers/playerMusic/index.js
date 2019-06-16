import createReducer from '../createReduce'

import { IS_FETCHING, ERROR_FETCH, COMPLETE_FETCH, COMPLETE_SONG, IS_COMPLETED_SONG } from './actionsCreators'
const initialState = {}

const searchSong = createReducer(initialState, {
  [IS_FETCHING]: (state, action) => ({
    isFetching: true
  }),
  [ERROR_FETCH]: (state, action) => ({
    isFetching: false,
    error: action.error
  }),
  [COMPLETE_FETCH]: (state, action) => ({
    isFetching: false,
    tracksList: action.payload
  }),
  [IS_COMPLETED_SONG]: (state, action) => ({
    ...state,
    success: false
  }),
  [COMPLETE_SONG]: (state, action) => ({
    ...state,
    success: true,
    track: action.payload
  })
})

export default searchSong

