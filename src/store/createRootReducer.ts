import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import features from 'features'

import { types } from 'features/main-page'

export type ReduxState = {
  router: RouterState
  main: types.MainPageState
}

const createRootReducer = (history: History) =>
  combineReducers<ReduxState>({
    router: connectRouter(history),
    main: features.Main.reducer,
  })

export default createRootReducer
