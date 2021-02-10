import { RouteChildrenProps } from 'react-router'

import { TaskItem } from './components'

import styles from './MainPage.module.scss'

type Props = RouteChildrenProps

const MainPage = (props: Props) => {
  console.log(props)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.panel}>
            <button className={styles.button} type="button">
              Create Task
            </button>
            <div className={styles.sort}>
              Sorting by:
              <select className={styles.select}>
                <option value="username">username</option>
                <option value="email">email</option>
                <option value="status">status task</option>
              </select>
            </div>
          </div>
          <div className={styles.listTasks}>
            <h3 className={styles.caption}>List Tasks</h3>
            <div className={styles.content}>
              <div className={styles.tableHead}>
                <p className={styles.number}>Task:</p>
                <p className={styles.description}>Description Task:</p>
                <p className={styles.author}>Autor:</p>
                <p className={styles.email}>Email:</p>
                <p className={styles.status}>Status Task:</p>
                <p className={styles.action}>Edit Task:</p>
                <p className={styles.action}>Remove Task:</p>
              </div>
              {<TaskItem />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
