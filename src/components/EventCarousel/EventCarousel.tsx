import React from "react"
import Slider from "react-slick"
import { useMediaQuery } from "react-responsive"
import SliderButton from "../SliderButton/SliderButton"

const NextArrow = (props: any) => (
  <SliderButton
    direction="right"
    {...props}
    style={{ right: 0, transform: "translateX(50%)" }}
  />
)
const PrevArrow = (props: any) => (
  <SliderButton
    direction="left"
    {...props}
    style={{ left: 0, transform: "translateX(-50%)" }}
  />
)

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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Slider {...settings} className="w-full event-carousel">
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
          // const tags = [
          //   sportType,
          //   categories,
          //   `${raceRunners} joined`,
          //   `${eventType} submission`,
          // ].filter((tag) => tag !== undefined)
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

const Tag = ({ name }: { name: string }) => (
  <span className="px-2 py-1 text-xs capitalize border border-gray-300 border-solid rounded-full">
    {name}
  </span>
)

export default EventCarousel
