import { useState } from 'react'
import styles from './Header.module.scss'

export const Header = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.title}>Task maker app</div>
          <div className={styles.profile}>
            <button className={styles.profile__button} onClick={() => setShowForm(!showForm)}>
              Sign In
            </button>
            {showForm && (
              <form action="#" className={styles.profile__form}>
                <div className={styles.profile__title}>Only the administrator can Sing In</div>
                <label className={styles.profile__label}>
                  Username:
                  <input type="text" placeholder="Please input username" />
                </label>
                <label className={styles.profile__label}>
                  Password:
                  <input type="password" placeholder="Please input password" />
                </label>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                  className={styles.profile__SignIn}
                >
                  Sign In
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
