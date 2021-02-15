import { createSelector } from 'reselect'
import { authPageStateSelector } from './authPageStateSelector'
import { ReduxState } from 'store/createRootReducer'
import { AuthPageState } from '../types'

export const userStateSelector = createSelector<ReduxState, AuthPageState, boolean>(
  authPageStateSelector,
  (state) => state.user
)
