import { useHistory } from 'react-router'

import styles from './Header.module.scss'

type Props = {
  authStatus: boolean
  signOut: () => void
}

export const Header = (props: Props) => {
  const history = useHistory()

  const { authStatus, signOut } = props

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.title}>Task maker app</div>
          <div className={styles.profile}>
            {!authStatus ? (
              <button className={styles.profile__button} onClick={() => history.push('/auth')}>
                Sign In
              </button>
            ) : (
              <button className={styles.profile__button} onClick={signOut}>
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
