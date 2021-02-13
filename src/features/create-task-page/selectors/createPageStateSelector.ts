import { createSelector, Selector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'

import { CreatePageState } from '../types'

const getCreatePageState: Selector<ReduxState, CreatePageState> = (state) => state.createPage

export const createPageStateSelector = createSelector<ReduxState, CreatePageState, CreatePageState>(
  getCreatePageState,
  (state) => state
)
