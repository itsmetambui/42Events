import React from "react"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

import SliderButton from "../SliderButton/SliderButton"

const NextArrow = (props: any) => (
  <SliderButton
    {...props}
    icon={<RightOutlined />}
    style={{
      right: 0,
      transform: "translateX(50%)",
      ...props.styles,
    }}
  />
)

const PrevArrow = (props: any) => (
  <SliderButton
    {...props}
    icon={<LeftOutlined />}
    style={{
      left: 0,
      transform: "translateX(-50%)",
      ...props.styles,
    }}
  />
)

export { NextArrow, PrevArrow }
