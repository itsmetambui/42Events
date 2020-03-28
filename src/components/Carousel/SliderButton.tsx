import React from "react"
import { Button } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { useMediaQuery } from "react-responsive"

type SliderButtonProps = {
  className?: string
  style?: React.CSSProperties
  onClick?:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined
  direction: "left" | "right"
  currentSlide?: number
  slideCount?: number
  hidden?: boolean
}

const SliderButton: React.FC<SliderButtonProps> = ({
  className,
  style,
  onClick,
  direction,
  hidden,
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })
  const styles = {
    ...style,
    display: isMobile ? "none" : "block",
    top: "43%",
    right: direction === "right" ? "20%" : "auto",
    left: direction === "left" ? "20%" : "auto",
    border: 0,
    zIndex: 1000,
    position: "absolute",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
  } as React.CSSProperties

  return (
    <Button
      className={className}
      style={styles}
      onClick={onClick}
      shape="circle"
      icon={direction === "right" ? <RightOutlined /> : <LeftOutlined />}
      hidden={hidden}
    />
  )
}

export default SliderButton
