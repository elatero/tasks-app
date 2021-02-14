import features from 'features'
import { Switch, Redirect } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import Layout from '../layout'

export const Router = () => {
  return (
    <Layout>
      <Switch>
        <PublicRoute path="/" exact component={features.MainPage.MainPage} />
        <PublicRoute path="/create" component={features.CreateTaskPage.CreateTaskPage} />
        <PublicRoute path="/auth" component={features.AuthPage.AuthPage} />
        <ProtectedRoute path="/edit/:id" component={features.EditTaskPage.EditTaskPage} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}
