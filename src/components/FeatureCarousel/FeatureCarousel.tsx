import React from "react"
import Slider from "react-slick"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { useMediaQuery } from "react-responsive"
import SliderButton from "../SliderButton/SliderButton"

type FeatureCarouselProps = {
  data: { id: string; bannerCard: string; raceName: string }[]
}

const NextArrow = (props: any) => (
  <SliderButton
    {...props}
    hidden={props.currentSlide === props.slideCount - 1}
    icon={<RightOutlined />}
    style={{
      top: "43%",
      right: "20%",
      ...props.style,
    }}
  />
)
const PrevArrow = (props: any) => (
  <SliderButton
    {...props}
    hidden={props.currentSlide === 0}
    icon={<LeftOutlined />}
    style={{
      top: "43%",
      left: "20%",
      ...props.style,
    }}
  />
)

const FeatureCarousel: React.FC<FeatureCarouselProps> = ({ data }) => {
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
    <Slider {...settings} className="w-full text-center race-carousel">
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

export default FeatureCarousel
