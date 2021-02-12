import { produce } from 'immer'
import { createReducer } from 'store'

import * as t from './actionTypes'

import { FetchTasksListAction } from './actions'
import { MainPageState } from './types'

const initState: MainPageState = {
  taskList: null,
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
      }

      if (!action.meta && action.payload && typeof action.payload === 'string') {
        draft.errorMessage = action.payload
      }
    }),
})

export default reducer
