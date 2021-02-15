import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import * as actions from './actions'
import * as selectors from './selectors'

type OwnProps = {
  userData: {
    username: string
    password: string
  }
  statusAuth?: string
  userAuth: boolean
}

const mapStateToProps = createStructuredSelector<ReduxState, OwnProps>({
  userData: selectors.dataUserSelector,
  statusAuth: selectors.statusAuthSelector,
  userAuth: selectors.userStateSelector,
})

const mapDispatchToProps = {
  onChangeFormData: actions.changeFormData,
  onAuth: actions.onAuth,
  clearStatus: actions.clearStatus,
}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
