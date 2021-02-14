import * as t from '../actionTypes'

type Payload = {
  value: string
}

export type ChangeFormDataAction = BaseFSA<Payload>
type ChangeFormData = (name: string, value: string) => ChangeFormDataAction

export const changeFormData: ChangeFormData = (name, value) => {
  if (name === 'username') {
    return {
      type: t.CHANGE_USERNAME_DATE,
      payload: { value },
    }
  } else {
    return {
      type: t.CHANGE_PASSWORD_DATA,
      payload: { value },
    }
  }
}
