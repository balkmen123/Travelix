import { ReactElement } from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'

interface Prod {
  children: JSX.Element
}

function DefaultLayout(prod: Prod) {
  const { children } = prod
  return (
    <div className="">
      <Header></Header>
      <div className="">
        <div className="">{children}</div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DefaultLayout
