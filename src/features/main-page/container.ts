import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import * as actions from './actions'
import * as selectors from './selectors'

import { TaskItem } from './types'

type OwnProps = {
  taskList: TaskItem[] | null
}

const mapStateToProps = createStructuredSelector<ReduxState, OwnProps>({
  taskList: selectors.taskListSelector,
})

const mapDispatchToProps = {
  fetchTasksList: actions.fetchTasksList,
}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
