import { applyMiddleware, createStore, PreloadedState } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'

import createRootReducer, { ReduxState } from './createRootReducer'

export const history = createBrowserHistory()

const configureStore = (preloadedState?: PreloadedState<ReduxState>) => {
  const middlewares = [thunkMiddleware, routerMiddleware(history)]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer] // Add any enchancers here
  const composedEnhancers = composeWithDevTools(...enhancers)

  const rootReducer = createRootReducer(history)
  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./createRootReducer', () => store.replaceReducer(rootReducer))
  }

  return { store }
}

export default configureStore
