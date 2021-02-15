import * as t from '../actionTypes'

export type SignOutAction = BaseFSA
type SignOut = () => SignOutAction

export const signOut: SignOut = () => {
  return {
    type: t.SIGN_OUT,
  }
}
