import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import feature from 'features'

import { ReduxState } from 'store/createRootReducer'

type OwnProps = {
  authStatus: boolean
}

const mapStateToProps = createStructuredSelector<ReduxState, OwnProps>({
  authStatus: feature.AuthPage.selectors.userStateSelector,
})

const mapDispathToProps = {
  signOut: feature.AuthPage.actions.signOut,
}

export const connector = connect(mapStateToProps, mapDispathToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
