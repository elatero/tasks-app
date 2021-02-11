import { ComponentType } from 'react'
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom'

type Props = RouteProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
}

const PublicRoute = (props: Props) => {
  const { component: Component, ...rest } = props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return <Route {...rest} render={({ staticContext, ...props }) => <Component {...props} />} />
}

export default PublicRoute
