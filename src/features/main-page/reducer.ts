import { produce } from 'immer'
import { createReducer } from 'store'
import { actionHasDone, actionHasError } from 'utils'

import * as t from './actionTypes'

import { FetchTasksListAction } from './actions'
import { MainPageState } from './types'

const initState: MainPageState = {
  taskList: null,
  loading: false,
}

const reducer = createReducer(initState, {
  [t.FETCH_TASKS_LIST]: (state, action: FetchTasksListAction) =>
    produce(state, (draft) => {
      const { payload, meta } = action

      draft.loading = !(meta && meta.done)
      delete draft.error
    }),
})

export default reducer
