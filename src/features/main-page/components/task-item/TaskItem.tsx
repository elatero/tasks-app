import styles from './TaskItem.module.scss'

import { TaskItem as TaskItemType } from '../../types'

type Props = { task: TaskItemType }

export const TaskItem = (props: Props) => {
  const { id, text, username, email, status, image_path } = props.task

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
        <button>edit</button>
      </div>
      <div className={styles.action}>
        <button>remove</button>
      </div>
    </div>
  )
}
