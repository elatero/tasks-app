import { History } from 'history'

import styles from './TaskItem.module.scss'

import { TaskItem as TaskItemType } from '../../types'

type Props = { task: TaskItemType; history: History }

export const TaskItem = (props: Props) => {
  const {
    task: { id, text, username, email, status, image_path },
    history,
  } = props

  return (
    <div className={styles.task}>
      <div className={styles.number}>{id}</div>
      <div className={styles.image}>{image_path ? <img src={image_path} alt="image" /> : 'No Photo'}</div>
      <div className={styles.description}>
        <p className={styles.description__text}>{text}</p>
      </div>
      <div className={styles.author}>
        <span>{username}</span>
      </div>
      <div className={styles.email}>
        <span>{email}</span>
      </div>
      <div className={styles.status}>
        <span>{status}</span>
      </div>
      <div className={styles.action}>
        <button
          onClick={() => {
            history.push({ pathname: `edit/${id}`, state: { id, email, username, text } })
          }}
        >
          edit
        </button>
      </div>
      <div className={styles.action}>
        <button>remove</button>
      </div>
    </div>
  )
}
