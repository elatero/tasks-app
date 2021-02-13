import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import features from 'features'

import { MainPageState } from 'features/main-page/types'
import { CreatePageState } from 'features/create-task-page/types'

export type ReduxState = {
  router: RouterState
  main: MainPageState
  createPage: CreatePageState
}

const createRootReducer = (history: History) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  combineReducers<ReduxState>({
    router: connectRouter(history),
    main: features.MainPage.reducer,
    createPage: features.CreateTaskPage.reducer,
  })

export default createRootReducer
