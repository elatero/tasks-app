import { produce } from 'immer'
import { createReducer } from 'store'

import * as t from './actionTypes'

import { ChangeFormDataAction, CreateTaskAction } from './actions'
import { CreatePageState } from './types'

const initState: CreatePageState = {
  data: {
    username: '',
    email: '',
    task: '',
  },
  loading: false,
  errorMessage: '',
}

const reducer = createReducer(initState, {
  [t.CREATE_TASK]: (state, action: CreateTaskAction) =>
    produce(state, (draft) => {
      draft.loading = !(action.meta && action.meta.done)
      draft.errorMessage = ''

      if (action.meta && action.meta.done && action.payload && typeof action.payload !== 'string') {
        draft.status = action.payload.status
        draft.data.username = ''
        draft.data.email = ''
        draft.data.task = ''
      }

      if (!action.meta && action.payload && typeof action.payload === 'string') {
        draft.errorMessage = action.payload
      }
    }),
  [t.CHANGE_USERNAME_DATE]: (state, action: ChangeFormDataAction) =>
    produce(state, (draft) => {
      if (action.payload) {
        draft.data.username = action.payload.value
      }
    }),
  [t.CHANGE_EMAIL_DATE]: (state, action: ChangeFormDataAction) =>
    produce(state, (draft) => {
      if (action.payload) {
        draft.data.email = action.payload.value
      }
    }),
  [t.CHANGE_TASK_DATE]: (state, action: ChangeFormDataAction) =>
    produce(state, (draft) => {
      if (action.payload) {
        draft.data.task = action.payload.value
      }
    }),
  [t.CLEAR_STATUS]: (state) =>
    produce(state, (draft) => {
      draft.status = ''
    }),
})

export default reducer
