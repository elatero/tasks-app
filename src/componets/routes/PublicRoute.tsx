import { ComponentType } from 'react'
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom'

type Props = RouteProps & {
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
}

const PublicRoute = (props: Props) => {
  const { component: Component, ...rest } = props
  return <Route {...rest} render={({ staticContext, ...props }) => <Component {...props} />} />
}

export default PublicRoute
