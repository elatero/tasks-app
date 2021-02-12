import { createSelector } from 'reselect'
import { mainPageStateSelector } from './MainPageStateSelector'
import { ReduxState } from 'store/createRootReducer'
import { MainPageState, TaskItem } from '../types'

export const taskListSelector = createSelector<ReduxState, MainPageState, TaskItem[] | null>(
  mainPageStateSelector,
  (state) => state.taskList
)
