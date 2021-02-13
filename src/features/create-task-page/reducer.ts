import { produce } from 'immer'
import { createReducer } from 'store'

import * as t from './actionTypes'

import { ChangeFormDataAction } from './actions'
import { CreatePageState } from './types'

const initState: CreatePageState = {
  username: '',
  email: '',
  task: '',
}

const reducer = createReducer(initState, {
  // [t.FETCH_TASKS_LIST]: (state, action: FetchTasksListAction) =>
  //   produce(state, (draft) => {
  //     draft.loading = !(action.meta && action.meta.done)
  //     draft.errorMessage = ''

  //     if (action.meta && action.meta.done && action.payload && typeof action.payload !== 'string') {
  //       draft.taskList = action.payload.taskList
  //       draft.total_task_count = action.payload.total_task_count
  //       draft.currentPage = action.payload.currentPage
  //     }

  //     if (!action.meta && action.payload && typeof action.payload === 'string') {
  //       draft.errorMessage = action.payload
  //     }
  //   }),
  [t.CHANGE_USERNAME_DATE]: (state, action: ChangeFormDataAction) =>
    produce(state, (draft) => {
      if (action.payload) {
        draft.username = action.payload.value
      }
    }),
  [t.CHANGE_EMAIL_DATE]: (state, action: ChangeFormDataAction) =>
    produce(state, (draft) => {
      if (action.payload) {
        draft.email = action.payload.value
      }
    }),
  [t.CHANGE_TASK_DATE]: (state, action: ChangeFormDataAction) =>
    produce(state, (draft) => {
      if (action.payload) {
        draft.task = action.payload.value
      }
    }),
})

export default reducer
