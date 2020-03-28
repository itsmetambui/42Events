import React, { useRef, useEffect, useState } from "react"
import Slider from "react-slick"
import { useMediaQuery } from "react-responsive"
import Tag from "../Tag/Tag"
import { NextArrow, PrevArrow } from "./Arrow"

type EventCarouselProps = {
  data: {
    id: string
    raceName: string
    bannerCard: string
    racePeriod: string
    categories: string[]
    sportType: string
    raceRunners: number
    eventType: string
  }[]
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
  }

  useEffect(() => {
    if (imageRef.current !== null) {
      const height = imageRef.current.clientHeight
      setImageHeight(height)
    }
  }, [])

  return (
    <Slider
      {...settings}
      prevArrow={<PrevArrow styles={{ top: imageHeight / 2 }} />}
      nextArrow={<NextArrow styles={{ top: imageHeight / 2 }} />}
      className="w-full event-carousel"
    >
      {data.map(
        ({
          id,
          bannerCard,
          raceName,
          racePeriod,
          sportType,
          categories,
          raceRunners,
          eventType,
        }) => {
          const tags = [sportType]
            .concat(
              categories,
              `${raceRunners} joined`,
              `${eventType} submission`,
            )
            .filter((tag) => tag !== undefined)
          return (
            <div key={id} className="event-box lg:max-w-screen-lg">
              <img
                ref={imageRef}
                src={bannerCard}
                alt={raceName}
                className="w-full rounded-lg"
              />
              <p className="mt-2 mb-0 text-base font-semibold">{raceName}</p>
              <p className="mb-1 text-xs font-light ">{racePeriod}</p>
              <div className="flex flex-row flex-wrap -mx-1">
                {tags.map((tag) => (
                  <div key={tag} className="p-1">
                    <Tag name={tag} />
                  </div>
                ))}
              </div>
            </div>
          )
        },
      )}
    </Slider>
  )
}

export default EventCarousel
