import * as t from '../actionTypes'

type Data = {
  username: string
  email: string
  task: string
}

type Payload = {
  data: Data
}

export type FetchFormDataAction = BaseFSA<Payload>
type FetchFormData = (data: Data) => FetchFormDataAction

export const fetchFormData: FetchFormData = (data) => {
  return {
    type: t.FETCH_FORM_DATA,
    payload: { data },
  }
}
