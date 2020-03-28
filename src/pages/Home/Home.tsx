import React from "react"
import FeatureCarousel from "../../components/FeatureCarousel/FeatureCarousel"
import { useQuery } from "react-query"
import axios from "axios"
import EventTypeList from "./EventTypeList"
import { Divider } from "antd"
import EventBox from "./EventBox"

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
        <div className="container h-screen mx-auto">
          <FeatureCarousel
            data={data.featured.map(({ _id, banner_card, race_name }: any) => ({
              id: _id,
              bannerCard: banner_card,
              raceName: race_name,
            }))}
          />

          <div className="w-full max-w-screen-lg px-4 py-6 mx-auto">
            <EventTypeList />
            <Divider />

            <EventBox title="Starting soon" data={data.startingSoon} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
