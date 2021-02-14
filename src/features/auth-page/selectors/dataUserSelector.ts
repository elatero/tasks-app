import { createSelector } from 'reselect'
import { authPageStateSelector } from './authPageStateSelector'
import { ReduxState } from 'store/createRootReducer'
import { AuthPageState } from '../types'

type data = {
  username: string
  password: string
}

export const dataUserSelector = createSelector<ReduxState, AuthPageState, data>(
  authPageStateSelector,
  (state) => state.UIState
)
