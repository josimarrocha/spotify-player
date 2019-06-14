import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

export default ({ initialState } = {}) => {
  const compor = compose(applyMiddleware(thunk), logger())
  const store = createStore(reducers, initialState, compor)
  return store
}

const logger = () => window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x