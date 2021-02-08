import { FC } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { ConnectedComponent } from 'react-redux'

type Props = RouteProps & {
  component: FC | ConnectedComponent<any, any>
}

const PublicRoute = (props: Props) => {
  const { component: Component, ...rest } = props
  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default PublicRoute
