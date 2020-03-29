import React from "react"
import { Link } from "react-router-dom"

import walkLogo from "../../assets/images/category-walk.png"
import runLogo from "../../assets/images/category-run.png"
import bikeLogo from "../../assets/images/category-bike.png"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { updateFilter } from "../../reducers/raceQuerySlice"

const types = [
  {
    type: "running",
    imageUrl: runLogo,
    backgroundColor: "rgb(8, 191, 169)",
    backgroundSize: "60%",
  },
  {
    type: "cycling",
    imageUrl: bikeLogo,
    backgroundColor: "rgb(58, 183, 240)",
    backgroundSize: "49%",
  },
  {
    type: "walking",
    imageUrl: walkLogo,
    backgroundColor: "rgb(255, 112, 67)",
    backgroundSize: "60%",
  },
]

const EventTypeList = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h1 className="text-2xl font-extrabold sm:text-3xl">Events</h1>
      <div className="flex flex-row flex-wrap items-center -mx-1">
        {types.map(({ type, imageUrl, backgroundColor, backgroundSize }) => (
          <div key={type} className="p-1 w-36 h-30">
            <Link
              to={{
                pathname: "/races",
              }}
              onClick={() => dispatch(updateFilter({ filter: "sportType", value: type }))}
            >
              <div
                className="block w-full h-full p-4 text-sm font-medium text-white bg-no-repeat rounded-lg shadow-lg cursor"
                style={{
                  backgroundColor,
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize,
                  backgroundPosition: "100%",
                }}
              >
                <p className="capitalize ">{type}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventTypeList
