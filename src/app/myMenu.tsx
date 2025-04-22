"use client";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  PartitionOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import React from "react";
import { useState } from "react";
import Sider from "antd/es/layout/Sider";
import { ConfigProvider } from "antd";

const items = [
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
      { key: "5", label: "客戶列表" },
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
            popupBg: "#FA541C ",
          },
        Layout:{
          triggerBg:"#FFE7BA",
          triggerHeight:"64px"
        }
        },
        token: {
          fontSize: 20,
          fontSizeLG: 24,
          fontFamily: "Microsoft YaHei",
          colorPrimary: "#FFA940",
        },
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        collapsedWidth={40}
        onCollapse={toggleCollapsed}
        width={200}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor:"#FFE7BA",
          marginRight:"10px"
        }}
      >
        <Menu
          mode="inline"
          style={{
            height: "100%",
            backgroundImage: "linear-gradient(#FA541C, #FFE7BA)",
          }}
          inlineCollapsed={collapsed}
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
    </ConfigProvider>
  );
};
export default MyMenu;
