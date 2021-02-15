import { ReactNode } from 'react'
import { PropsFromRedux, connector } from './container'

import { Header, Footer } from './components'

import styles from './Layout.module.scss'

type Props = {
  children: ReactNode
} & PropsFromRedux

const Layout = (props: Props) => {
  const { children, authStatus, signOut } = props

  return (
    <div className={styles.wrapper}>
      <Header authStatus={authStatus} signOut={signOut} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default connector(Layout)
