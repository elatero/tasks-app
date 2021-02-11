import { connect, ConnectedProps } from 'react-redux'
import { ReduxState } from 'store/createRootReducer'
import * as actions from './actions'
// import * as selectors from '../selectors'

// const mapStateToProps = (state: ReduxState) => {
//   return {
//     cart: selectors.cartSelector(state)
//   }
// }

const mapDispatchToProps = {
  fetchTasksList: actions.fetchTasksList,
}

export const connector = connect(null, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
