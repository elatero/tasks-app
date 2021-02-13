import * as t from '../actionTypes'

type Payload = {
  numberPage: number
}

export type NextPageAction = BaseFSA<Payload>
type NextPage = (numberPage: number, totalPages: number) => NextPageAction

export const nextPage: NextPage = (numberPage, totalPages) => {
  let nextNumberPage = numberPage + 1

  if (nextNumberPage > totalPages) {
    nextNumberPage = 1
  }

  return {
    type: t.NEXT_PAGE,
    payload: { numberPage: nextNumberPage },
  }
}
