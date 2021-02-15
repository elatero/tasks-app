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

export type UpdateTaskAction = FSA<undefined, Payload, string>
type OnUpdateTask = (
  username: string,
  email: string,
  task: string,
  id: number
) => MrxThunk<UpdateTaskAction, Promise<void>>

export const onUpdateTask: OnUpdateTask = (username, email, task, id) => async (dispatch) => {
  dispatch({
    type: t.EDIT_TASK,
    meta: { done: false },
  })

  const token = localStorage.getItem('token')

  const form = new FormData()
  form.append('username', username)
  form.append('email', email)
  form.append('text', task)
  if (token) {
    form.append('token', token)
  }

  try {
    const { data }: AxiosResponse<Response> = await axios.post(`${settings.backendUrl}/edit/${id}`, form, {
      params: { developer: 'Name' },
    })

    if (!data) {
      throw new Error('Response body is empty!')
    }

    console.log(data)

    dispatch({
      type: t.EDIT_TASK,
      payload: { status: data.status },
      meta: { done: true },
    })
  } catch (error) {
    dispatch({
      type: t.EDIT_TASK,
      payload: error.message,
      error: true,
    })
  }
}
