import React, { useRef, useEffect, useState } from "react"
import Slider from "react-slick"
import { useMediaQuery } from "react-responsive"
import { NextArrow, PrevArrow } from "./Arrow"
import RaceContent from "../RaceContent/RaceContent"

export type EventType = {
  id: string
  raceName: string
  bannerCard: string
  racePeriod: string
  categories: string[]
  sportType: string
  raceRunners: number
  eventType: string
  racePrice: string
}

type EventCarouselProps = {
  data: EventType[]
}

const EventCarousel: React.FC<EventCarouselProps> = ({ data }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })
  const imageRef = useRef<HTMLImageElement>(null)
  const [imageHeight, setImageHeight] = useState(0)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 2,
    nextArrow: <NextArrow styles={{ top: imageHeight / 2 }} />,
    prevArrow: <PrevArrow styles={{ top: imageHeight / 2 }} />,
  }

  useEffect(() => {
    if (imageRef.current !== null) {
      const height = imageRef.current.clientHeight
      setImageHeight(height)
    }
  }, [imageRef])

  return (
    <Slider {...settings} className="w-full event-carousel">
      {data.map(({ id, bannerCard, raceName, racePeriod, ...raceContent }) => {
        return (
          <div key={id} className="event-box lg:max-w-screen-lg">
            <img
              ref={imageRef}
              src={bannerCard}
              alt={raceName}
              className="w-full rounded-lg"
            />
            <RaceContent
              {...raceContent}
              raceName={raceName}
              racePeriod={racePeriod}
            />
          </div>
        )
      })}
    </Slider>
  )
}

type TagsType = {
  categories: string[]
  sportType: string
  raceRunners: number
  eventType: string
  racePrice: string
}

export default EventCarousel
