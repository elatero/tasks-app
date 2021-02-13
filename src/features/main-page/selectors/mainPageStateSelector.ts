import { createSelector, Selector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'

import { MainPageState } from '../types'

const getMainPageState: Selector<ReduxState, MainPageState> = (state) => state.main

export const mainPageStateSelector = createSelector<ReduxState, MainPageState, MainPageState>(
  getMainPageState,
  (state) => state
)
