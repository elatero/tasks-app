import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <a className={styles.link} href="https://github.com/elatero" target="true">
            Developer: &lt;Elatero&gt;
          </a>
          <p className={styles.copyright}>copyright &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
