import { produce } from 'immer'
import { createReducer } from 'store'

import * as t from './actionTypes'

import { ChangeFormDataAction, UpdateTaskAction, FetchFormDataAction } from './actions'
import { EditTaskPageState } from './types'

const initState: EditTaskPageState = {
  data: {
    username: '',
    email: '',
    task: '',
  },
  errorMessage: '',
}

const reducer = createReducer(initState, {
  [t.FETCH_FORM_DATA]: (state, action: FetchFormDataAction) =>
    produce(state, (draft) => {
      if (action.payload) {
        draft.data.email = action.payload.data.email
        draft.data.username = action.payload.data.username
        draft.data.task = action.payload.data.task
      }
    }),
  [t.CREATE_TASK]: (state, action: UpdateTaskAction) =>
    produce(state, (draft) => {
      if (!(action.meta && action.meta.done)) {
        draft.errorMessage = ''
      }

      if (action.meta && action.meta.done && action.payload && typeof action.payload !== 'string') {
        draft.status = action.payload.status
        // draft.data.username = ''
        // draft.data.email = ''
        // draft.data.task = ''
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
