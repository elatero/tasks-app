import { useHistory } from 'react-router'
import styles from './Header.module.scss'

export const Header = () => {
  const history = useHistory()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.title}>Task maker app</div>
          <div className={styles.profile}>
            <button className={styles.profile__button} onClick={() => history.push('/auth')}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
