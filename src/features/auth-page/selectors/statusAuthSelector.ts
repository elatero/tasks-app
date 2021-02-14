import { createSelector } from 'reselect'
import { authPageStateSelector } from './authPageStateSelector'
import { ReduxState } from 'store/createRootReducer'
import { AuthPageState } from '../types'

export const statusAuthSelector = createSelector<ReduxState, AuthPageState, string | undefined>(
  authPageStateSelector,
  (state) => state.status
)
