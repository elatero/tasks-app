import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import features from 'features'

import { MainPageState } from 'features/main-page/types'

export type ReduxState = {
  router: RouterState
  main: MainPageState
}

const createRootReducer = (history: History) =>
  combineReducers<ReduxState>({
    router: connectRouter(history),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    main: features.MainPage.reducer,
  })

export default createRootReducer
