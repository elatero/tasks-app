import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import * as actions from './actions'
import * as selectors from './selectors'

import { CreatePageState } from './types'

type OwnProps = {
  data: CreatePageState
}

const mapStateToProps = createStructuredSelector<ReduxState, OwnProps>({
  data: selectors.createPageStateSelector,
})

const mapDispatchToProps = {
  onChangeFormData: actions.changeFormData,
}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
