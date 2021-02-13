import { createSelector } from 'reselect'
import { mainPageStateSelector } from './mainPageStateSelector'
import { ReduxState } from 'store/createRootReducer'
import { MainPageState } from '../types'

export const totalTasksCountSelector = createSelector<ReduxState, MainPageState, number>(
  mainPageStateSelector,
  (state) => +state.total_task_count
)
