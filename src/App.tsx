import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ArrowUpOutlined } from "@ant-design/icons"
import { Spin, Button } from "antd"

import Header from "./components/Header/Header"
import ControlModal from "./components/ControlModal/ControlModal"
import ScrollToTop from "react-scroll-up"

const Home = lazy(() => import("./pages/Home/Home"))
const Races = lazy(() => import("./pages/Races/Races"))
function App() {
  return (
    <div>
      <Router>
        <Suspense
          fallback={
            <div className="pt-12 text-center">
              <Spin></Spin>
            </div>
          }
        >
          <Header></Header>
          <ControlModal />
          <div className="pt-14">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/races" component={Races} />
            </Switch>
          </div>
          <ScrollToTop showUnder={160} easing="easeOutCirc">
            <Button size="large" type="primary" shape="circle" icon={<ArrowUpOutlined />} />
          </ScrollToTop>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
