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
    <Slider {...settings} className="w-full mt-2 event-carousel">
      {data.map(({ id, bannerCard, raceName }) => (
        <div key={id} className="overflow-hidden event-box lg:max-w-screen-lg">
          <img src={bannerCard} alt={raceName} className="w-full rounded-lg" />
        </div>
      ))}
    </Slider>
  )
}

export default EventCarousel
