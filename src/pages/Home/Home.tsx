import React from "react"
import { useQuery } from "react-query"

import backend from "../../config/axios"
import HomeContentLoading from "./HomeContentLoading"
import HomeContentLoaded from "./HomeContentLoaded"

const fetchEvents = async () => {
  const response = await backend.get("/race-events")
  return response.data
}

const Home: React.FC = () => {
  const { status, error, data } = useQuery("events", fetchEvents)

  return (
    <div>
      {/* <HomeContentLoading /> */}
      {status === "loading" ? (
        <HomeContentLoading />
      ) : status === "error" ? (
        <h2>Error: {error.message}</h2>
      ) : (
        <HomeContentLoaded data={data} />
      )}
    </div>
  )
}

export default Home
