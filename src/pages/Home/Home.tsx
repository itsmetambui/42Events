import React from "react"
import EventCarousel from "../../components/EventCarousel/EventCarousel"
import { useQuery } from "react-query"
import axios from "axios"

const fetchEvents = async () => {
  const response = await axios.get(
    "https://api-v2-sg-staging.42race.com/api/v1/race-events",
  )
  return response.data.data
}

const Home: React.FC = () => {
  const { status, error, data } = useQuery("events", fetchEvents)

  return (
    <div>
      {status === "loading" ? (
        <h2>TODO: add loading placeholder</h2>
      ) : status === "error" ? (
        <h2>Error: {error.message}</h2>
      ) : (
        <div className="container h-screen mx-auto text-center">
          <EventCarousel
            data={data.featured.map(({ _id, banner_card, raceName }: any) => ({
              id: _id,
              bannerCard: banner_card,
              raceName: raceName,
            }))}
          />
        </div>
      )}
    </div>
  )
}

export default Home
