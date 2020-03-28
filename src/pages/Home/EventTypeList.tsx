import React from "react"

const types = [
  {
    type: "running",
    imageUrl:
      "https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/category-run-png-nwn10102019-104426",
    backgroundColor: "rgb(8, 191, 169)",
    backgroundSize: "60%",
  },
  {
    type: "cycling",
    imageUrl:
      "https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/category-bike-png-udy10102019-110227",
    backgroundColor: "rgb(58, 183, 240)",
    backgroundSize: "49%",
  },
  {
    type: "walking",
    imageUrl:
      "https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/category-walk-png-67w10102019-110311",
    backgroundColor: "rgb(255, 112, 67)",
    backgroundSize: "60%",
  },
]

const EventTypeList = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold">Events</h1>
      <div className="flex flex-row flex-wrap items-center -mx-1">
        {types.map(({ type, imageUrl, backgroundColor, backgroundSize }) => (
          <div key={type} className="p-1 w-36 h-30">
            <div
              className="block w-full h-full p-4 text-sm font-medium text-white bg-no-repeat rounded-lg cursor"
              style={{
                backgroundColor,
                backgroundImage: `url(${imageUrl})`,
                backgroundSize,
                backgroundPosition: "100%",
              }}
              onClick={() => {
                /* TODO navigate to event route */
              }}
            >
              <p className="capitalize ">{type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventTypeList
