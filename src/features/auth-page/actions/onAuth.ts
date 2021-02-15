import axios, { AxiosResponse } from 'axios'
import * as t from '../actionTypes'
import settings from 'config/settings'

type Response = {
  message: {
    token: string
  }
  status: 'ok' | 'error'
}

type Payload = {
  status: 'ok' | 'error'
  token: string
}

export type AuthAction = FSA<undefined, Payload, string>
type OnAuth = (username: string, password: string) => MrxThunk<AuthAction, Promise<void>>

export const onAuth: OnAuth = (username, password) => async (dispatch) => {
  dispatch({
    type: t.AUTH,
    meta: { done: false },
  })

  const form = new FormData()
  form.append('username', username)
  form.append('password', password)

  try {
    const { data }: AxiosResponse<Response> = await axios.post(`${settings.backendUrl}/login`, form, {
      params: { developer: 'Name' },
    })

    if (!data) {
      throw new Error('Response body is empty!')
    }

    dispatch({
      type: t.AUTH,
      payload: { status: data.status, token: data.message.token },
      meta: { done: true },
    })
  } catch (error) {
    dispatch({
      type: t.AUTH,
      payload: error.message,
      error: true,
    })
  }
}
