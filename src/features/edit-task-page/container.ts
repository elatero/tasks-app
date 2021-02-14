import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import * as actions from './actions'
import * as selectors from './selectors'

type OwnProps = {
  data: {
    username: string
    email: string
    task: string
  }
  statusCreateTask?: string
}

const mapStateToProps = createStructuredSelector<ReduxState, OwnProps>({
  data: selectors.dataTaskSelector,
  statusCreateTask: selectors.statusEditSelector,
})

const mapDispatchToProps = {
  fetchFormData: actions.fetchFormData,
  onChangeFormData: actions.changeFormData,
  onUpdateTask: actions.onUpdateTask,
  clearStatus: actions.clearStatus,
}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
