import React from "react"
import { Select } from "antd"

const { Option } = Select

const languages: { value: string; title: string }[] = [
  { value: "english", title: "English" },
  { value: "sim-chinese", title: "简体中文" },
  { value: "tra-chinese", title: "繁體中文" },
  { value: "bahasa", title: "Bahasa Indonesia" },
  { value: "thai", title: "ภาษาไทย" },
  { value: "viet", title: "Tiếng Việt" },
]

const LanguageSelector: React.FC = () => {
  return (
    <Select defaultValue="english" style={{ width: 120 }}>
      {languages.map(({ value, title }) => (
        <Option key={value} style={{ fontWeight: 300 }} value={value}>
          {title}
        </Option>
      ))}
    </Select>
  )
}

export default LanguageSelector
