import React from "react"
import { Modal, Menu } from "antd"
import {
  MailOutlined,
  QuestionCircleOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons"
import { useSelector, useDispatch } from "react-redux"

import { AppState } from "../../reducers/rootReducer"
import { AppDispatch } from "../../store"
import { toogleControlModal } from "../../reducers/uiSlice"

const { SubMenu } = Menu

type MenuItem = {
  key: string
  icon: React.ReactNode
  title: string
}

const items: MenuItem[] = [
  {
    key: "login",
    icon: <MailOutlined style={{ fontSize: 16 }} />,
    title: "Log in",
  },
  {
    key: "signup",
    icon: <MailOutlined style={{ fontSize: 16 }} />,
    title: "Sign up",
  },
  {
    key: "faq",
    icon: <QuestionCircleOutlined style={{ fontSize: 16 }} />,
    title: "Guides and FAQ",
  },
  {
    key: "contact",
    icon: <CustomerServiceOutlined style={{ fontSize: 16 }} />,
    title: "Contact us",
  },
]

const ControlModal: React.FC = () => {
  const isControlModalOpen = useSelector(
    (state: AppState) => state.ui.isControlModalOpen,
  )
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Modal
      visible={isControlModalOpen}
      closable={false}
      maskClosable
      footer={null}
      style={{ maxWidth: 340 }}
      onCancel={() => dispatch(toogleControlModal())}
    >
      <Menu style={{ maxWidth: 340, border: 0 }} mode="vertical">
        {items.map(({ key, icon, title }) => (
          <SubMenu
            key={key}
            title={
              <span>
                {icon}
                <span className="text-sm font-semibold">{title}</span>
              </span>
            }
          />
        ))}
      </Menu>
    </Modal>
  )
}

export default ControlModal
