import { useEffect } from 'react'
import { RouteChildrenProps } from 'react-router'

import { Loader } from 'componets'
import { connector, PropsFromRedux } from './container'
import { TaskItem } from './components'

import styles from './MainPage.module.scss'

type Props = RouteChildrenProps & PropsFromRedux

const MainPage = (props: Props) => {
  const {
    fetchTasksList,
    taskList,
    totalTasksCount,
    currentPage,
    sortTasksList,
    totalPages,
    nextPage,
    prevPage,
    onSortType,
  } = props

  useEffect(() => {
    fetchTasksList(currentPage, sortTasksList)
  }, [currentPage, sortTasksList])

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
              <select className={styles.select} value={sortTasksList} onChange={(e) => onSortType(e.target.value)}>
                <option value="id">default</option>
                <option value="username">username</option>
                <option value="email">email</option>
                <option value="status">status task</option>
              </select>
            </div>
          </div>
          <div className={styles.listTasks}>
            <h3 className={styles.caption}>List Tasks</h3>
            <p className={styles.totalTask}>Total tasks: {totalTasksCount || 0}</p>
            <div className={styles.content}>
              <div className={styles.tableHead}>
                <p className={styles.number}>Task:</p>
                <p className={styles.image}>Image:</p>
                <p className={styles.description}>Description Task:</p>
                <p className={styles.author}>Autor:</p>
                <p className={styles.email}>Email:</p>
                <p className={styles.status}>Status Task:</p>
                <p className={styles.action}>Edit Task:</p>
                <p className={styles.action}>Remove Task:</p>
              </div>
              {taskList ? (
                <>
                  <div>
                    {taskList.map((task) => (
                      <TaskItem key={task.id} task={task} />
                    ))}
                  </div>
                  <div className={styles.pagination}>
                    <div className={styles.pagination__inner}>
                      <span className={styles.pagination__prev} onClick={() => prevPage(currentPage, totalPages)}>
                        &#8249; prev
                      </span>
                      <span className={styles.pagination__currentPage}>{currentPage}</span> of{' '}
                      <span className={styles.pagination__totalPages}>{totalPages}</span> pages
                      <span className={styles.pagination__next} onClick={() => nextPage(currentPage, totalPages)}>
                        next &#8250;
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connector(MainPage)
