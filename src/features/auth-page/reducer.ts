import { produce } from 'immer'
import { createReducer } from 'store'

import * as t from './actionTypes'

import { ChangeFormDataAction, AuthAction } from './actions'
import { AuthPageState } from './types'

const initState: AuthPageState = {
  user: null,
  UIState: {
    username: '',
    password: '',
  },
  loading: false,
  errorMessage: '',
}

const reducer = createReducer(initState, {
  [t.AUTH]: (state, action: AuthAction) =>
    produce(state, (draft) => {
      draft.loading = !(action.meta && action.meta.done)
      draft.errorMessage = ''

      if (action.meta && action.meta.done && action.payload && typeof action.payload !== 'string') {
        draft.status = action.payload.status
        draft.user = action.payload.user
        draft.UIState.password = ''
        draft.UIState.username = ''
      }

      if (!action.meta && action.payload && typeof action.payload === 'string') {
        draft.errorMessage = action.payload
      }
    }),
  [t.CHANGE_USERNAME_DATE]: (state, action: ChangeFormDataAction) =>
    produce(state, (draft) => {
      if (action.payload) {
        draft.UIState.username = action.payload.value
      }
    }),
  [t.CHANGE_PASSWORD_DATA]: (state, action: ChangeFormDataAction) =>
    produce(state, (draft) => {
      if (action.payload) {
        draft.UIState.password = action.payload.value
      }
    }),
  [t.CLEAR_STATUS]: (state) =>
    produce(state, (draft) => {
      draft.status = ''
    }),
})

export default reducer
