import { createSelector } from 'reselect'
import { createPageStateSelector } from './createPageStateSelector'
import { ReduxState } from 'store/createRootReducer'
import { CreatePageState } from '../types'

type data = {
  username: string
  email: string
  task: string
}

export const dataTaskSelector = createSelector<ReduxState, CreatePageState, data>(
  createPageStateSelector,
  (state) => state.data
)
