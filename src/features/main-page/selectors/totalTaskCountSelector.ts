import { createSelector } from 'reselect'
import { mainPageStateSelector } from './MainPageStateSelector'
import { ReduxState } from 'store/createRootReducer'
import { MainPageState } from '../types'

export const totalTasksCountSelector = createSelector<ReduxState, MainPageState, string | number>(
  mainPageStateSelector,
  (state) => state.total_task_count
)
