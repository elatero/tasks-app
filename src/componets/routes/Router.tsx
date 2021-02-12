import features from 'features'
import { Switch } from 'react-router-dom'
import PublicRoute from './PublicRoute'
// import ProtectedRoute from './ProtectedRoute'
import Layout from '../layout'

export const Router = () => {
  return (
    <Layout>
      <Switch>
        <PublicRoute path="/" exact component={features.MainPage.MainPage} />
      </Switch>
    </Layout>
  )
}
