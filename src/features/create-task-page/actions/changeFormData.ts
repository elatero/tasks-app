import * as t from '../actionTypes'

type Payload = {
  value: string
}

export type ChangeFormDataAction = BaseFSA<Payload>
type ChangeFormData = (name: string, value: string) => ChangeFormDataAction

export const changeFormData: ChangeFormData = (name, value) => {
  console.log(name, value)
  if (name === 'username') {
    return {
      type: t.CHANGE_USERNAME_DATE,
      payload: { value },
    }
  }
  if (name === 'email') {
    return {
      type: t.CHANGE_EMAIL_DATE,
      payload: { value },
    }
  } else {
    return {
      type: t.CHANGE_TASK_DATE,
      payload: { value },
    }
  }
}
