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
                <p className={styles.number__caption}>Task:</p>
                <p className={styles.description__caption}>Description Task:</p>
                <p className={styles.author__caption}>Autor:</p>
                <p className={styles.email__caption}>Email:</p>
                <p className={styles.status__caption}>Status Task:</p>
                <p className={styles.action__caption}>Edit Task:</p>
                <p className={styles.action__caption}>Remove Task:</p>
              </div>
              <div className={styles.task}>
                <div className={styles.number}>№1</div>
                <div className={styles.description}>
                  <p className={styles.description__text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti error, laudantium aliquam corrupti
                    facere tempore voluptas tempora ut neque quidem ullam veritatis aliquid quam alias nam quaerat
                    tenetur, voluptatem maxime.
                  </p>
                </div>
                <div className={styles.author}>
                  <span>Ivan Ivanov</span>
                </div>
                <div className={styles.email}>
                  <span>mail@mail.com</span>
                </div>
                <div className={styles.status}>
                  <span>done</span>
                </div>
                <div className={styles.action}>
                  <button>edit</button>
                </div>
                <div className={styles.action}>
                  <button>remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
