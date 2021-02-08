import { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { connect, ConnectedProps, ConnectedComponent } from 'react-redux'
import { ReduxState } from 'store/createRootReducer'

type OtherProps = RouteProps & {
  component: FC | ConnectedComponent<any, any>
}

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
        return <Redirect to="/login" />
      }}
    />
  )
}

const mapStateToProps = (state: ReduxState) => ({ user: state })
const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(ProtectedRoute)
