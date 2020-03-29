import React from "react"
import BlockLoader from "./BlockLoader"

const EventBoxLoader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="m-0 text-base font-extrabold sm:text-xl">{title}</h2>
        <span>View all ></span>
      </div>
      <BlockLoader
        speed={2}
        viewBox="0 0 400 200"
        backgroundColor="#d9d9d9"
        foregroundColor="#ecebeb"
        style={{ width: "85%" }}
      ></BlockLoader>
    </div>
  )
}

export default EventBoxLoader
