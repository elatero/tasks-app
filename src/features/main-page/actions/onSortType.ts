import * as t from '../actionTypes'

type Payload = {
  sortType: string
}

export type SortTypeAction = BaseFSA<Payload>
type OnSortType = (sortType: string) => SortTypeAction

export const onSortType: OnSortType = (sortType) => {
  return {
    type: t.SORT_TYPE_TASKS_LIST,
    payload: { sortType: sortType },
  }
}
