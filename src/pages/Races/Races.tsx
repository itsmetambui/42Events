import React from "react"
import { useLocation } from "react-router-dom"

const Races = () => {
  const { state } = useLocation()
  console.log(state)
  return <div>Races</div>
}

export default Races
