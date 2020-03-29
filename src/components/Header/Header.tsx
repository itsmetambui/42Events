import React, { useState, useEffect, useRef } from "react"
import { BellOutlined, MenuOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../../store"
import { toogleControlModal } from "../../reducers/uiSlice"
import styled from "styled-components"
import { AppState } from "../../reducers/rootReducer"

const HeaderContainer = styled.div`
  z-index: 1002;
  transition: all 0.2s ease-in-out;
`
const Header: React.FC = () => {
  const isControlModalOpen = useSelector((state: AppState) => state.ui.isControlModalOpen)
  const [show, setShow] = useState(true)
  const widthCn = isControlModalOpen ? "w-screen" : "w-full"
  const dispatch = useDispatch<AppDispatch>()
  let prevScrollY = useRef<number | null>(null)

  useEffect(
    function toggleHeaderOnScrool() {
      const handleScroll = () => {
        const { pageYOffset } = window
        setShow(pageYOffset === 0 || (pageYOffset > 0 && pageYOffset < prevScrollY.current!))
        prevScrollY.current = pageYOffset
      }

      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", () => handleScroll)
      }
    },
    [prevScrollY],
  )

  return (
    <HeaderContainer className={`fixed top-0 bg-white transform ${widthCn} ${show ? "translate-y-0" : "-translate-y-14"}`}>
      <div className="flex flex-row items-center justify-center max-w-screen-md px-4 mx-auto md:max-w-screen-lg h-14">
        <div className="flex items-center justify-start w-1/3">
          <Button type="link" icon={<BellOutlined style={{ fontSize: 18 }} />} />
        </div>
        <div className="flex items-center justify-center w-1/3 ">
          <h2 className="my-0 text-base font-bold">Events</h2>
        </div>
        <div className="flex items-center justify-end w-1/3">
          <Button type="link" icon={<MenuOutlined style={{ fontSize: 18 }} />} onClick={() => dispatch(toogleControlModal())} />
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header
