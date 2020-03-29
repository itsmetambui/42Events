import React from "react"
import { Button } from "antd"
import { useMediaQuery } from "react-responsive"

type SliderButtonProps = {
  className?: string
  style?: React.CSSProperties
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined
  currentSlide?: number
  slideCount?: number
  hidden?: boolean
  icon: React.ReactElement
}

const SliderButton: React.FC<SliderButtonProps> = ({ className, style, onClick, hidden, icon }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })
  const styles = {
    display: isMobile ? "none" : "block",
    border: 0,
    zIndex: 1000,
    position: "absolute",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
    ...style,
  } as React.CSSProperties

  return <Button className={className} style={styles} onClick={onClick} shape="circle" icon={icon} hidden={hidden} />
}

export default SliderButton
