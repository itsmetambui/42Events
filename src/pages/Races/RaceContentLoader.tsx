import React from "react"

import { useMediaQuery } from "react-responsive"
import RaceLoader from "../../components/Loaders/RaceLoader"
import BlockLoader from "../../components/Loaders/BlockLoader"

const RaceContentLoader = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })

  return (
    <div className="container h-screen max-w-screen-md p-6 pt-10 mx-auto md:max-w-screen-lg">
      <h1 className="text-xl font-extrabold">Loading events</h1>
      {[...Array(10)].map((_, i) =>
        isMobile ? (
          <BlockLoader
            key={i}
            speed={2}
            viewBox="0 0 400 200"
            backgroundColor="#d9d9d9"
            foregroundColor="#ecebeb"
            style={{ width: "100%", marginTop: 20 }}
          />
        ) : (
          <RaceLoader key={i} viewBox={`0 0 1060 200`} style={{ width: "100%" }} speed={2} />
        ),
      )}
    </div>
  )
}

export default RaceContentLoader
