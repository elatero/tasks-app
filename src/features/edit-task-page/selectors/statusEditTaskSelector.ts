import { createSelector } from 'reselect'
import { editPageStateSelector } from './editPageStateSelector'
import { ReduxState } from 'store/createRootReducer'
import { EditTaskPageState } from '../types'

export const statusEditSelector = createSelector<ReduxState, EditTaskPageState, string | undefined>(
  editPageStateSelector,
  (state) => state.status
)
