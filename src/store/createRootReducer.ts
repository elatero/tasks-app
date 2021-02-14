import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import features from 'features'

import { MainPageState } from 'features/main-page/types'
import { CreatePageState } from 'features/create-task-page/types'
import { EditTaskPageState } from 'features/edit-task-page/types'
import { AuthPageState } from 'features/auth-page/types'

export type ReduxState = {
  router: RouterState
  main: MainPageState
  createPage: CreatePageState
  editPage: EditTaskPageState
  authPage: AuthPageState
}

const createRootReducer = (history: History) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  combineReducers<ReduxState>({
    router: connectRouter(history),
    main: features.MainPage.reducer,
    createPage: features.CreateTaskPage.reducer,
    editPage: features.EditTaskPage.reducer,
    authPage: features.AuthPage.reducer,
  })

export default createRootReducer
