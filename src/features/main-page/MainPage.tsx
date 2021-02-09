import { RouteChildrenProps } from 'react-router'

import styles from './MainPage.module.scss'

type Props = RouteChildrenProps

const MainPage = (props: Props) => {
  console.log(props)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.panel}>
            <button type="button">Create Task</button>
            <div>
              Sorting:
              <select>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>
          <div className={styles.listTasks}>List Tasks</div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
