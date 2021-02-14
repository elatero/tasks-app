import * as t from '../actionTypes'

export type ClearStatusAction = BaseFSA
type ClearStatus = () => ClearStatusAction

export const clearStatus: ClearStatus = () => {
  return {
    type: t.CLEAR_STATUS,
  }
}
