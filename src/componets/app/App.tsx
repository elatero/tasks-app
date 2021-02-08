import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import { Router } from '../routes'
import configureStore, { history } from 'store'

const { store } = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </Provider>
  )
}

export default App
