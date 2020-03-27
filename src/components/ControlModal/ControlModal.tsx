import React from "react"
import { Modal, Menu, Divider, Select } from "antd"
import {
  CodepenOutlined,
  QuestionCircleOutlined,
  CustomerServiceOutlined,
  EditOutlined,
} from "@ant-design/icons"
import { useSelector, useDispatch } from "react-redux"

import { AppState } from "../../reducers/rootReducer"
import { AppDispatch } from "../../store"
import { toogleControlModal } from "../../reducers/uiSlice"

const { SubMenu } = Menu
const { Option } = Select

type MenuItem = {
  key: string
  icon: React.ReactNode
  title: string
}

const items: MenuItem[] = [
  {
    key: "login",
    icon: <CodepenOutlined style={{ fontSize: 20 }} />,
    title: "Log in",
  },
  {
    key: "signup",
    icon: <EditOutlined style={{ fontSize: 20 }} />,
    title: "Sign up",
  },
  {
    key: "faq",
    icon: <QuestionCircleOutlined style={{ fontSize: 20 }} />,
    title: "Guides and FAQ",
  },
  {
    key: "contact",
    icon: <CustomerServiceOutlined style={{ fontSize: 20 }} />,
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
      style={{ maxWidth: 360 }}
      onCancel={() => dispatch(toogleControlModal())}
    >
      <div className="my-1">
        <Menu style={{ maxWidth: 360, border: 0 }} mode="vertical">
          {items.map(({ key, icon, title }) => (
            <SubMenu
              className="py-4"
              key={key}
              title={
                <span className="flex items-center">
                  {icon}
                  <span className="pl-2 text-sm font-medium">{title}</span>
                </span>
              }
            />
          ))}
        </Menu>
        <Divider />
        <div className="flex items-center justify-between px-4">
          <span>
            <img
              className="w-6 h-6"
              src="https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/change-language-png-69e06012020-153245"
              alt="language"
            />
            <span className="pl-2 text-sm font-medium">Language</span>
          </span>
          <Select defaultValue="english" style={{ width: 120 }}>
            <Option value="english">English</Option>
            <Option value="sim-chinese">简体中文</Option>
            <Option value="tra-chinese">繁體中文</Option>
            <Option value="bahasa">Bahasa Indonesia</Option>
            <Option value="thai">ภาษาไทย</Option>
            <Option value="viet">Tiếng Việt</Option>
          </Select>
        </div>
      </div>
    </Modal>
  )
}

export default ControlModal
