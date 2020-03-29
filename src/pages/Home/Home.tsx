import React from "react"
import { useQuery } from "react-query"
import { Divider } from "antd"

import backend from "../../config/axios"
import HomeContentLoader from "./HomeContentLoader"
import EventBox from "./EventBox"
import FeatureCarousel from "../../components/FeatureCarousel/FeatureCarousel"
import EventTypeList from "./EventTypeList"

const fetchEvents = async () => {
  const response = await backend.get("/race-events")
  return response.data
}

const Home: React.FC = () => {
  const { status, error, data } = useQuery("events", fetchEvents)

  return (
    <div>
      {status === "loading" ? (
        <HomeContentLoader />
      ) : status === "error" ? (
        <h2>Error: {error.message}</h2>
      ) : (
        <div className="container mx-auto">
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

            <span className="block mt-32 mb-12 text-xs font-light text-center text-gray-400">
              © 2019 42Race · Guide · Contact
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
