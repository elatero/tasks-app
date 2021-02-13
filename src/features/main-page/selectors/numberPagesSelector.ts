import { createSelector } from 'reselect'
import { totalPagesSelector } from './totalPagesSelector'
import { ReduxState } from 'store/createRootReducer'

// temprary

export const numberPagesSelector = createSelector<ReduxState, number, Array<number>>(
  totalPagesSelector,
  (numberPages) => {
    const result = []

    for (let i = 1; i <= numberPages; i++) {
      result.push(i)
    }

    return result
  }
)
