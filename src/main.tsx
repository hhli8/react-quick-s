console.log('this is main', process.env.NODE_ENV, process.env.NODE_ENVH)
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import '@/assets/scss/base.scss'

const Home = lazy(() => import('@/pages/home'))
const LayoutTab = lazy(() => import('@/pages/layout/tab'))
// import Home from '@/pages/home'
// import LayoutTab from '@/pages/layout/tab'

ReactDOM.render(
  <AppContainer key={Math.random()}>
    <BrowserRouter basename="/love/">
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" exact component={LayoutTab}  />
          <Route path="/home" component={Home}  />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </AppContainer>,
  document.getElementById('root')
)
