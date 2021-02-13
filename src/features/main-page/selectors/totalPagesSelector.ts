import { createSelector } from 'reselect'
import { totalTasksCountSelector } from './totalTaskCountSelector'
import { ReduxState } from 'store/createRootReducer'

export const totalPagesSelector = createSelector<ReduxState, number, number>(totalTasksCountSelector, (totalPages) =>
  Math.ceil(totalPages / 3)
)
