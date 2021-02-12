// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const actionHasError = (action: any) => {
  let result = false
  if (action.payload && !action.meta.done) {
    result = action.error
  }
  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const actionHasDone = (action: any) => {
  let result = false

  if (action.meta && action.meta.done && action.payload && typeof action.payload !== 'string') {
    result = true
  }

  return result
}
