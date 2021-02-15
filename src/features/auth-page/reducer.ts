import { produce } from 'immer'
import { createReducer } from 'store'

import * as t from './actionTypes'

import { ChangeFormDataAction, AuthAction } from './actions'
import { AuthPageState } from './types'

const token = localStorage.getItem('token')

const initState: AuthPageState = {
  user: !!token,
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
        draft.UIState.password = ''
        draft.UIState.username = ''

        if (action.payload.token) {
          localStorage.setItem('token', action.payload.token)
          draft.user = true
        }
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
  [t.SIGN_OUT]: (state) =>
    produce(state, (draft) => {
      localStorage.clear()
      sessionStorage.clear()
      draft.user = false
    }),
})

export default reducer
