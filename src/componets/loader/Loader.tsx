import { LoaderImage } from './images'

import styles from './Loader.module.scss'

export const Loader = () => (
  <div className={styles.wrapper}>
    <img src={LoaderImage} alt="loading" />
  </div>
)
