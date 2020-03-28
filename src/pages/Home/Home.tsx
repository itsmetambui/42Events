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
        <div className="container h-screen pb-12 mx-auto">
          <FeatureCarousel
            data={data.featured.map(({ _id, banner_card, race_name }: any) => ({
              id: _id,
              bannerCard: banner_card,
              raceName: race_name,
            }))}
          />

          <div className="w-full max-w-screen-lg p-6 mx-auto overflow-hidden">
            <EventTypeList />
            <Divider />

            <EventBox title="Starting soon" data={data.startingSoon} />
            <Divider />
            <EventBox title="Popular" data={data.popular} />
            <Divider />
            <EventBox title="New realease" data={data.newRelease} />
            <Divider />
            <EventBox title="Free events" data={data.free} />
            <Divider />
            <EventBox title="Past events" data={data.past} />

            <span className="block mt-32 text-xs font-light text-center text-gray-400">
              © 2019 42Race · Guide · Contact
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
