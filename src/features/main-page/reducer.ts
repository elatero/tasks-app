import { produce } from 'immer'
import { createReducer } from 'store'

import * as t from './actionTypes'

import { FetchTasksListAction, SortTypeAction, NextPageAction, PrevPageAction } from './actions'
import { MainPageState } from './types'

const initState: MainPageState = {
  taskList: null,
  total_task_count: 0,
  loading: false,
  errorMessage: '',
  sortTasksType: 'id',
  currentPage: 1,
  totalPage: [],
}

const reducer = createReducer(initState, {
  [t.FETCH_TASKS_LIST]: (state, action: FetchTasksListAction) =>
    produce(state, (draft) => {
      draft.loading = !(action.meta && action.meta.done)
      draft.errorMessage = ''

      if (action.meta && action.meta.done && action.payload && typeof action.payload !== 'string') {
        draft.taskList = action.payload.taskList
        draft.total_task_count = action.payload.total_task_count
        draft.currentPage = action.payload.currentPage
      }

      if (!action.meta && action.payload && typeof action.payload === 'string') {
        draft.errorMessage = action.payload
      }
    }),
  [t.SORT_TYPE_TASKS_LIST]: (state, action: SortTypeAction) =>
    produce(state, (draft) => {
      if (action.payload) {
        draft.sortTasksType = action.payload.sortType
      }
    }),
  [t.NEXT_PAGE]: (state, action: NextPageAction) =>
    produce(state, (draft) => {
      if (action.payload) {
        draft.currentPage = action.payload.numberPage
      }
    }),
  [t.PREV_PAGE]: (state, action: PrevPageAction) =>
    produce(state, (draft) => {
      if (action.payload) {
        draft.currentPage = action.payload.numberPage
      }
    }),
})

export default reducer
