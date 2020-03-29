import React from "react"
import { Modal, Menu, Divider } from "antd"
import { CodepenOutlined, QuestionCircleOutlined, CustomerServiceOutlined, EditOutlined } from "@ant-design/icons"
import { useSelector, useDispatch } from "react-redux"

import { AppState } from "../../reducers/rootReducer"
import { AppDispatch } from "../../store"
import { toogleControlModal } from "../../reducers/uiSlice"
import LanguageSelector from "../LanguageSelector/LanguageSelector"

const { SubMenu } = Menu

const ControlModal: React.FC = () => {
  const isControlModalOpen = useSelector((state: AppState) => state.ui.isControlModalOpen)
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
      <Menu style={{ border: 0 }} mode="vertical">
        {items.map(({ key, Icon, title }) => (
          <SubMenu
            className="py-4"
            key={key}
            title={
              <span className="flex items-center">
                <Icon />
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
          <span className="pl-4 text-sm font-medium">Language</span>
        </span>
        <LanguageSelector />
      </div>
    </Modal>
  )
}

type MenuItem = {
  key: string
  Icon: React.ForwardRefExoticComponent<any & React.RefAttributes<HTMLSpanElement>>
  title: string
}

const items: MenuItem[] = [
  {
    key: "login",
    Icon: CodepenOutlined,
    title: "Log in",
  },
  {
    key: "signup",
    Icon: EditOutlined,
    title: "Sign up",
  },
  {
    key: "faq",
    Icon: QuestionCircleOutlined,
    title: "Guides and FAQ",
  },
  {
    key: "contact",
    Icon: CustomerServiceOutlined,
    title: "Contact us",
  },
]

export default ControlModal
