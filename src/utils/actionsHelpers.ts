type Action = {
  meta: {
    done?: boolean
  }
  error?: boolean
}

export const actionHasError = (action: Action) => {
  let result = false
  if (action.meta && !action.meta.done) {
    result = true
  }
  return result
}

export const actionHasDone = (action: Action) => {
  let result = false
  if (action.meta && action.meta.done) {
    result = action.meta.done
  }
  return result
}
