import React from "react"
import Slider from "react-slick"
import { useMediaQuery } from "react-responsive"
import SliderButton from "./SliderButton"

type EventCarouselProps = {
  data: { id: string; bannerCard: string; raceName: string }[]
}

const NextArrow = (props: any) => (
  <SliderButton
    direction="right"
    hidden={props.currentSlide === props.slideCount - 1}
    {...props}
  />
)
const PrevArrow = (props: any) => (
  <SliderButton direction="left" hidden={props.currentSlide === 0} {...props} />
)

const EventCarousel: React.FC<EventCarouselProps> = ({ data }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })

  const settings = {
    dots: !isMobile,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Slider {...settings} className="w-full race-carousel">
      {data.map(({ id, bannerCard, raceName }) => (
        <div key={id} className="relative lg:max-w-screen-lg">
          {isMobile ? (
            <img src={bannerCard} alt={raceName} className="w-full" />
          ) : (
            <div
              className="h-64 mx-auto bg-center bg-no-repeat bg-contain md:h-136"
              style={{ backgroundImage: `url(${bannerCard})` }}
            ></div>
          )}
        </div>
      ))}
    </Slider>
  )
}

export default EventCarousel
