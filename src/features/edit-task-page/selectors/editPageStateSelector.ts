import { createSelector, Selector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'

import { EditTaskPageState } from '../types'

const getEditPageState: Selector<ReduxState, EditTaskPageState> = (state) => state.editPage

export const editPageStateSelector = createSelector<ReduxState, EditTaskPageState, EditTaskPageState>(
  getEditPageState,
  (state) => state
)
