import { createSelector } from 'reselect'
import { mainPageStateSelector } from './mainPageStateSelector'
import { ReduxState } from 'store/createRootReducer'
import { MainPageState } from '../types'

export const currentPageSelector = createSelector<ReduxState, MainPageState, number>(
  mainPageStateSelector,
  (state) => state.currentPage
)
