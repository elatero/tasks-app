import { produce } from 'immer'
import { createReducer } from 'store'

import * as t from './actionTypes'

import { FetchTasksListAction } from './actions'
import { MainPageState } from './types'

const initState: MainPageState = {
  taskList: null,
  total_task_count: 0,
  loading: false,
  errorMessage: '',
}

const reducer = createReducer(initState, {
  [t.FETCH_TASKS_LIST]: (state, action: FetchTasksListAction) =>
    produce(state, (draft) => {
      draft.loading = !(action.meta && action.meta.done)
      draft.errorMessage = ''

      if (action.meta && action.meta.done && action.payload && typeof action.payload !== 'string') {
        draft.taskList = action.payload.taskList
        draft.total_task_count = action.payload.total_task_count
      }

      if (!action.meta && action.payload && typeof action.payload === 'string') {
        draft.errorMessage = action.payload
      }
    }),
})

export default reducer
