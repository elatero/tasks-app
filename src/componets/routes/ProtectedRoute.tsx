import { ComponentType } from 'react'
import { Redirect, Route, RouteProps, RouteComponentProps } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import features from 'features'

import { ReduxState } from 'store/createRootReducer'

type OtherProps = RouteProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
}

type OwnProps = {
  user: boolean
}

// eslint-disable-next-line no-use-before-define
type Props = PropsFromRedux & OtherProps

const ProtectedRoute = (props: Props) => {
  const { component: Component, user, ...rest } = props
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props} />
        }
        return <Redirect to="/auth" />
      }}
    />
  )
}

const mapStateToProps = createStructuredSelector<ReduxState, OwnProps>({
  user: features.AuthPage.selectors.userStateSelector,
})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(ProtectedRoute)
