import axios, { AxiosResponse } from 'axios'
import * as t from '../actionTypes'
import settings from 'config/settings'

type Response = {
  message: {
    id: number
    username: string
    email: string
    text: string
    status: number
  }
  status: 'ok' | 'error'
}

type Payload = {
  status: 'ok' | 'error'
}

export type CreateTaskAction = FSA<undefined, Payload, string>
type OnCreateTask = (username: string, email: string, task: string) => MrxThunk<CreateTaskAction, Promise<void>>

export const onCreateTask: OnCreateTask = (username, email, task) => async (dispatch) => {
  dispatch({
    type: t.CREATE_TASK,
    meta: { done: false },
  })

  const form = new FormData()
  form.append('username', username)
  form.append('email', email)
  form.append('text', task)

  try {
    const { data }: AxiosResponse<Response> = await axios.post(`${settings.backendUrl}/create`, form, {
      params: { developer: 'Name' },
    })

    if (!data) {
      throw new Error('Response body is empty!')
    }

    dispatch({
      type: t.CREATE_TASK,
      payload: { status: data.status },
      meta: { done: true },
    })
  } catch (error) {
    dispatch({
      type: t.CREATE_TASK,
      payload: error.message,
      error: true,
    })
  }
}
