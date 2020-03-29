import React from "react"
import { Divider } from "antd"

import EventTypeList from "./EventTypeList"
import CarouselLoader from "../../components/Loaders/CarouselLoader"
import EventBoxLoader from "../../components/Loaders/EventBoxLoader"

const HomeContentLoader = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full text-center">
        <CarouselLoader />
      </div>
      <div className="w-full max-w-screen-lg p-6 mx-auto overflow-hidden">
        <EventTypeList />
        <Divider />
        <EventBoxLoader title="Starting soon" />
        <Divider />
        <EventBoxLoader title="Popular" />
        <Divider />
        <EventBoxLoader title="New release" />
        <Divider />
        <EventBoxLoader title="Free events" />
        <Divider />
        <EventBoxLoader title="Past events" />
        <Divider />
      </div>
    </div>
  )
}

export default HomeContentLoader
