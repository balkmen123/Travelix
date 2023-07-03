import React from 'react'
import './App.css'
import SimpleSlider from './SimpleSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
import DefaultLayout from './components/DefaultLayout/DefaultLayout'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            const Layout = route.layout ? route.layout : DefaultLayout

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
