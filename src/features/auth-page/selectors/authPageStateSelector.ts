import { createSelector, Selector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'

import { AuthPageState } from '../types'

const getAuthPageState: Selector<ReduxState, AuthPageState> = (state) => state.authPage

export const authPageStateSelector = createSelector<ReduxState, AuthPageState, AuthPageState>(
  getAuthPageState,
  (state) => state
)
