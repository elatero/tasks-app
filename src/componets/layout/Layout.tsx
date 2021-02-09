import { ReactNode } from 'react'

import { Header, Footer } from './components'

import styles from './Layout.module.scss'

type Props = {
  children: ReactNode
}

const Layout = (props: Props) => {
  const { children } = props

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
