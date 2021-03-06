import { useEffect } from 'react'
import { RouteChildrenProps } from 'react-router'
import { connector, PropsFromRedux } from './container'

import styles from './CreateTaskPage.module.scss'

type Props = RouteChildrenProps & PropsFromRedux

const CreateTaskPage = (props: Props) => {
  const { history, data, onChangeFormData, onCreateTask, statusCreateTask, clearStatus } = props

  useEffect(() => {
    if (statusCreateTask) {
      setTimeout(() => clearStatus(), 1000)
    }
  }, [statusCreateTask])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                history.push({ pathname: '/' })
              }}
            >
              Home
            </button>
          </div>
          <div className={styles.content}>
            <h2 className={styles.caption}>New Task</h2>
            <form action="#" className={styles.formTask}>
              <div className={styles.formTask__personalData}>
                <label className={styles.formTask__label}>
                  UserName:
                  <input
                    onChange={(e) => onChangeFormData(e.target.name, e.target.value)}
                    type="text"
                    name="username"
                    className={styles.formTask__input}
                    placeholder="Please enter your username..."
                    value={data.username}
                  />
                </label>
                <label className={styles.formTask__label}>
                  Email:
                  <input
                    onChange={(e) => onChangeFormData(e.target.name, e.target.value)}
                    type="text"
                    name="email"
                    className={styles.formTask__input}
                    placeholder="Please enter your email..."
                    value={data.email}
                  />
                </label>
              </div>
              <label className={styles.formTask__label}>
                Description task:
                <textarea
                  onChange={(e) => onChangeFormData(e.target.name, e.target.value)}
                  name="task"
                  className={styles.formTask__textArea}
                  placeholder="Please enter description task..."
                  value={data.task}
                ></textarea>
              </label>
              <button
                type="submit"
                className={styles.formTask__submit}
                onClick={(e) => {
                  e.preventDefault()
                  onCreateTask(data.username, data.email, data.task)
                }}
              >
                Create Task
              </button>
            </form>
            <div>
              {statusCreateTask &&
                (statusCreateTask === 'ok' ? <p>Your task created success</p> : <p>Failure, your task not created</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connector(CreateTaskPage)
