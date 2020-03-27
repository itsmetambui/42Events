import React from "react";
import { BellOutlined, MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Header: React.FC = () => {
  return (
    <div className="w-full px-4">
      <div className="flex flex-row items-center justify-center h-16 max-w-screen-md mx-auto">
        <div className="flex items-center justify-start w-1/3">
          <Button type="primary" icon={<BellOutlined />} />
        </div>
        <div className="flex items-center justify-center w-1/3 ">
          <h2 className="my-0">Events</h2>
        </div>
        <div className="flex items-center justify-end w-1/3">
          <Button type="primary" icon={<MenuOutlined />} />
        </div>
      </div>
    </div>
  );
};

export default Header;
