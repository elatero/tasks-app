const { REACT_APP_BACKEND_URL } = process.env

export default {
  backendUrl: REACT_APP_BACKEND_URL || 'https://uxcandy.com/~shapoval/test-task-backend/v2',
}
