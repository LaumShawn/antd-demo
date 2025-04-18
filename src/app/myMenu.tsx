"use client";
import { Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PartitionOutlined,
  ToolOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import { useState } from "react";
import { Button } from "antd";
import { ConfigProvider } from "antd";
import Item from "antd/es/list/Item";
import Sider from "antd/es/layout/Sider";

const items = [
  {
    key: "side",
    icon: <RightCircleOutlined />,
  },
  {
    key: "sub1", //指整個巢狀結構
    label: "儀表總版",
    icon: <DashboardOutlined />,
    children: [
      { key: "1", label: "通知管理" },
      { key: "2", label: "審計日誌" },
      { key: "3", label: "Option 3" },
      { key: "4", label: "Option 4 " },
    ],
  },
  {
    key: "sub2",
    label: "客戶管理",
    icon: <UserOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      { key: "7", label: "Option 7" },
      { key: "8", label: "Option 8" },
    ],
  },
  {
    key: "sub3",
    label: "維修商管理",
    icon: <PartitionOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
    ],
  },
  {
    key: "sub4",
    label: "供應鏈管理",
    icon: <ToolOutlined />,
    children: [
      { key: "11", label: "Option 9" },
      { key: "12", label: "Option 10" },
    ],
  },
];
const MyMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // Define the onClick handler function
  const handleMenuClick = (info: any) => {
    console.log("Clicked menu item key:", info.key);
    // Add your logic here based on the key
    // For example:
    // if (info.key === '1') {
    //   // navigate to notification management page
    // } else if (info.key === '2') {
    //   // navigate to audit log page
    // }
    // ... and so on
    if (info.key === "side") {
      toggleCollapsed();
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemColor: "#ffff",
            collapsedWidth:"50px",
            popupBg:"#FA541C "
          },
        },
        token: {
          fontSize: 20,
          fontSizeLG: 24,
          fontFamily: "Microsoft YaHei",
          colorPrimary: "#FFA940",
        
        },
      }}
    >       
    <Menu
          mode="inline"
          style={{
            height: "1024px",
            backgroundImage: "linear-gradient(#FA541C, #FFE7BA)",
            position:"fixed",
            maxWidth:"200px"
          }}
          inlineCollapsed={collapsed}
          
          items={items}
          onClick={handleMenuClick} // Pass the handler function here

        />
      
    </ConfigProvider>
  );
};
export default MyMenu;
