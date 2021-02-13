import { createSelector } from 'reselect'
import { createPageStateSelector } from './createPageStateSelector'
import { ReduxState } from 'store/createRootReducer'
import { CreatePageState } from '../types'

export const statusCreateSelector = createSelector<ReduxState, CreatePageState, string | undefined>(
  createPageStateSelector,
  (state) => state.status
)
