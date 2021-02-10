import styles from './TaskItem.module.scss'

export const TaskItem = () => {
  return (
    <div className={styles.task}>
      <div className={styles.number}>№1</div>
      <div className={styles.description}>
        <p className={styles.description__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti error, laudantium aliquam corrupti facere
          tempore voluptas tempora ut neque quidem ullam veritatis aliquid quam alias nam quaerat tenetur, voluptatem
          maxime.
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
  )
}
