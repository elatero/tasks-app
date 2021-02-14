import { useEffect } from 'react'
import { RouteChildrenProps } from 'react-router'

import { connector, PropsFromRedux } from './container'

import styles from './AuthPage.module.scss'

type Props = RouteChildrenProps & PropsFromRedux

const AuthPage = (props: Props) => {
  const { userData, statusAuth, onChangeFormData, onAuth, clearStatus, history, userAuth } = props

  useEffect(() => {
    if (statusAuth) {
      setTimeout(() => clearStatus(), 1000)
    }
  }, [statusAuth])

  useEffect(() => {
    if (statusAuth === 'ok') {
      history.push({ pathname: '/' })
    }
  }, [userAuth])

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
            <form action="#" className={styles.content__form}>
              <div className={styles.content__title}>Only the administrator can Sing In</div>
              <label className={styles.content__label}>
                Username:
                <input
                  type="text"
                  placeholder="Please input username"
                  name="username"
                  onChange={(e) => onChangeFormData(e.target.name, e.target.value)}
                  value={userData.username}
                />
              </label>
              <label className={styles.content__label}>
                Password:
                <input
                  type="password"
                  name="password"
                  placeholder="Please input password"
                  onChange={(e) => onChangeFormData(e.target.name, e.target.value)}
                  value={userData.password}
                />
              </label>
              <div className={styles.content__actions}>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault()
                    onAuth(userData.username, userData.password)
                  }}
                  className={styles.content__SignIn}
                >
                  Sign In
                </button>
                <span>Fogot your password?</span>
              </div>
            </form>
            <div>
              {statusAuth &&
                (statusAuth === 'ok' ? <p>Your task created success</p> : <p>Failure, your task not created</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connector(AuthPage)
