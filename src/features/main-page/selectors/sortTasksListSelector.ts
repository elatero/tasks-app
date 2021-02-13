import { createSelector } from 'reselect'
import { mainPageStateSelector } from './mainPageStateSelector'
import { ReduxState } from 'store/createRootReducer'
import { MainPageState } from '../types'

export const sortTasksListSelector = createSelector<ReduxState, MainPageState, string>(
  mainPageStateSelector,
  (state) => state.sortTasksType
)
