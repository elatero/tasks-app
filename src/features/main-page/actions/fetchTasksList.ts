import axios, { AxiosResponse } from 'axios'
import * as t from '../actionTypes'
import settings from 'config/settings'
import { TaskItem } from '../types'

type Response = {
  message: {
    tasks: TaskItem[]
    total_task_count: string
  }
  status: 'ok' | 'error'
}

type Payload = {
  taskList: TaskItem[]
  total_task_count: string
  currentPage: number
}

export type FetchTasksListAction = FSA<undefined, Payload, string>
type FetchTasksList = (page: number, sortType: string) => MrxThunk<FetchTasksListAction, Promise<void>>

export const fetchTasksList: FetchTasksList = (page, sortType) => async (dispatch) => {
  dispatch({
    type: t.FETCH_TASKS_LIST,
    meta: { done: false },
  })

  try {
    const { data }: AxiosResponse<Response> = await axios.get(settings.backendUrl, {
      params: { developer: 'Name', page, sort_field: sortType },
    })

    if (!data) {
      throw new Error('Response body is empty!')
    }

    dispatch({
      type: t.FETCH_TASKS_LIST,
      payload: { taskList: data.message.tasks, total_task_count: data.message.total_task_count, currentPage: page },
      meta: { done: true },
    })
  } catch (error) {
    dispatch({
      type: t.FETCH_TASKS_LIST,
      payload: error.message,
      error: true,
    })
  }
}
