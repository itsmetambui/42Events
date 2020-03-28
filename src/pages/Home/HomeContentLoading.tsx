import React from "react"
import ContentLoader from "react-content-loader"
import EventTypeList from "./EventTypeList"
import { Divider } from "antd"

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

const CarouselLoader = () => (
  <ContentLoader
    speed={2}
    viewBox="0 0 400 200"
    backgroundColor="#d9d9d9"
    foregroundColor="#ecebeb"
    style={{ width: "80%" }}
  >
    <rect x="15" y="15" rx="4" ry="4" width="130" height="5" />
    <rect x="155" y="15" rx="3" ry="3" width="130" height="5" />
    <rect x="295" y="15" rx="3" ry="3" width="90" height="5" />
    <rect x="15" y="32.5" rx="4" ry="4" width="130" height="5" />
    <rect x="155" y="32.5" rx="3" ry="3" width="130" height="5" />
    <rect x="295" y="32.5" rx="3" ry="3" width="90" height="5" />
    <rect x="15" y="50" rx="3" ry="3" width="90" height="5" />
    <rect x="115" y="50" rx="3" ry="3" width="60" height="5" />
    <rect x="185" y="50" rx="3" ry="3" width="200" height="5" />
    <rect x="15" y="70" rx="3" ry="3" width="90" height="5" />
    <rect x="115" y="70" rx="3" ry="3" width="60" height="5" />
    <rect x="185" y="70" rx="3" ry="3" width="200" height="5" />
    <rect x="15" y="90" rx="3" ry="3" width="130" height="5" />
    <rect x="160" y="90" rx="3" ry="3" width="120" height="5" />
    <rect x="290" y="90" rx="3" ry="3" width="95" height="5" />
    <rect x="15" y="110" rx="3" ry="3" width="130" height="5" />
    <rect x="160" y="110" rx="3" ry="3" width="120" height="5" />
    <rect x="290" y="110" rx="3" ry="3" width="95" height="5" />
    <rect x="15" y="130" rx="3" ry="3" width="130" height="5" />
    <rect x="160" y="130" rx="3" ry="3" width="225" height="5" />
    <rect x="15" y="150" rx="3" ry="3" width="130" height="5" />
    <rect x="160" y="150" rx="3" ry="3" width="225" height="5" />
    <rect x="15" y="170" rx="4" ry="4" width="130" height="5" />
    <rect x="155" y="170" rx="3" ry="3" width="130" height="5" />
    <rect x="295" y="170" rx="3" ry="3" width="90" height="5" />
  </ContentLoader>
)

const EventBoxLoader = ({ title }: any) => (
  <div>
    <div className="flex flex-row items-center justify-between">
      <h2 className="m-0 text-base font-extrabold sm:text-xl">{title}</h2>
      <span>View all ></span>
    </div>
    <ContentLoader
      speed={2}
      viewBox="0 0 400 200"
      backgroundColor="#d9d9d9"
      foregroundColor="#ecebeb"
      style={{ width: "85%" }}
    >
      <rect x="15" y="15" rx="4" ry="4" width="130" height="5" />
      <rect x="155" y="15" rx="3" ry="3" width="130" height="5" />
      <rect x="295" y="15" rx="3" ry="3" width="90" height="5" />
      <rect x="15" y="32.5" rx="4" ry="4" width="130" height="5" />
      <rect x="155" y="32.5" rx="3" ry="3" width="130" height="5" />
      <rect x="295" y="32.5" rx="3" ry="3" width="90" height="5" />
      <rect x="15" y="50" rx="3" ry="3" width="90" height="5" />
      <rect x="115" y="50" rx="3" ry="3" width="60" height="5" />
      <rect x="185" y="50" rx="3" ry="3" width="200" height="5" />
      <rect x="15" y="70" rx="3" ry="3" width="90" height="5" />
      <rect x="115" y="70" rx="3" ry="3" width="60" height="5" />
      <rect x="185" y="70" rx="3" ry="3" width="200" height="5" />
      <rect x="15" y="90" rx="3" ry="3" width="130" height="5" />
      <rect x="160" y="90" rx="3" ry="3" width="120" height="5" />
      <rect x="290" y="90" rx="3" ry="3" width="95" height="5" />
      <rect x="15" y="110" rx="3" ry="3" width="130" height="5" />
      <rect x="160" y="110" rx="3" ry="3" width="120" height="5" />
      <rect x="290" y="110" rx="3" ry="3" width="95" height="5" />
      <rect x="15" y="130" rx="3" ry="3" width="130" height="5" />
      <rect x="160" y="130" rx="3" ry="3" width="225" height="5" />
      <rect x="15" y="150" rx="3" ry="3" width="130" height="5" />
      <rect x="160" y="150" rx="3" ry="3" width="225" height="5" />
      <rect x="15" y="170" rx="4" ry="4" width="130" height="5" />
      <rect x="155" y="170" rx="3" ry="3" width="130" height="5" />
      <rect x="295" y="170" rx="3" ry="3" width="90" height="5" />
    </ContentLoader>
  </div>
)

export default HomeContentLoader
