import { createSelector } from 'reselect'
import { editPageStateSelector } from './editPageStateSelector'
import { ReduxState } from 'store/createRootReducer'
import { EditTaskPageState } from '../types'

type data = {
  username: string
  email: string
  task: string
}

export const dataTaskSelector = createSelector<ReduxState, EditTaskPageState, data>(
  editPageStateSelector,
  (state) => state.data
)
