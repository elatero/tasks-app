import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = (props: Props) => {
  const { children } = props

  return <div>{children}</div>
}

export default Layout
