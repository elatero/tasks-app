import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import * as actions from './actions'
import * as selectors from './selectors'

import { TaskItem } from './types'

type OwnProps = {
  taskList: TaskItem[] | null
  totalTasksCount: string | number
  sortTasksList: string
  totalPages: number
  currentPage: number
  numberPages: Array<number>
}

const mapStateToProps = createStructuredSelector<ReduxState, OwnProps>({
  taskList: selectors.taskListSelector,
  totalTasksCount: selectors.totalTasksCountSelector,
  sortTasksList: selectors.sortTasksListSelector,
  totalPages: selectors.totalPagesSelector,
  currentPage: selectors.currentPageSelector,
  numberPages: selectors.numberPagesSelector,
})

const mapDispatchToProps = {
  fetchTasksList: actions.fetchTasksList,
  onSortType: actions.onSortType,
  nextPage: actions.nextPage,
  prevPage: actions.prevPage,
}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
