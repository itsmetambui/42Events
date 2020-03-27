import React from "react"
import { Modal } from "antd"
import { useSelector } from "react-redux"
import { AppState } from "../../reducers/rootReducer"

const ControlModal: React.FC = () => {
  const isControlModalOpen = useSelector(
    (state: AppState) => state.ui.isControlModalOpen,
  )

  return (
    <Modal visible={isControlModalOpen}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default ControlModal
