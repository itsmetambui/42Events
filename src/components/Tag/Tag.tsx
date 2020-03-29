import React from "react"
import runningIcon from "../../assets/images/running-icon.png"
import walkingIcon from "../../assets/images/walking-icon.png"
import cyclingIcon from "../../assets/images/cycling-icon.png"

const Tag = ({ name }: { name: string }) => (
  <span className="flex flex-row items-center px-2 py-1 text-xs capitalize border border-gray-300 border-solid rounded-full">
    {/* Of course there's better ways but it just not worth it */}
    {(name === "running" || name === "walking" || name === "cycling") && (
      <img
        src={name === "running" ? runningIcon : name === "walking" ? walkingIcon : cyclingIcon}
        alt="tag icon"
        className="w-3 h-3 mr-1"
      />
    )}
    <span>{name}</span>
  </span>
)

export default Tag
