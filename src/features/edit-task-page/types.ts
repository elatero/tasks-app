/// ////////////////////////////////////////////////////////////////////////////////
// DATA TYPES
/// ////////////////////////////////////////////////////////////////////////////////

/// ////////////////////////////////////////////////////////////////////////////////
//  REDUX STATE
/// ////////////////////////////////////////////////////////////////////////////////

export type EditTaskPageState = {
  data: {
    username: string
    email: string
    task: string
  }
  errorMessage: string
  status?: string
}
