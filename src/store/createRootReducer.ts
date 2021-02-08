import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

export type ReduxState = {
  router: RouterState
}

const createRootReducer = (history: History) =>
  combineReducers<ReduxState>({
    router: connectRouter(history),
  })

export default createRootReducer
