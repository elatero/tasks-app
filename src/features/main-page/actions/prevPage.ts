import * as t from '../actionTypes'

type Payload = {
  numberPage: number
}

export type PrevPageAction = BaseFSA<Payload>
type PrevPage = (numberPage: number, totalPages: number) => PrevPageAction

export const prevPage: PrevPage = (currentPage, totalPages) => {
  let prevNumberPage = currentPage - 1

  if (prevNumberPage < 1) {
    prevNumberPage = totalPages
  }

  return {
    type: t.PREV_PAGE,
    payload: { numberPage: prevNumberPage },
  }
}
