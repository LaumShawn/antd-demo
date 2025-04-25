import { useState } from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

interface CollapseSiderProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  siderWidth?: number;
  collapsedSiderWidth?: number;
}

const CollapseSider: React.FC<CollapseSiderProps> = ({
  collapsed,
  onCollapse,
  siderWidth = 200, // Standard width (used by Sider)
  collapsedSiderWidth = 40,
}) => {
  const items = [
    {
      key: "sub1", //指整個巢狀結構
      label: "儀表總版",

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

      children: [
        { key: "9", label: "Option 9" },
        { key: "10", label: "Option 10" },
      ],
    },
    {
      key: "sub4",
      label: "供應鏈管理",

      children: [
        { key: "11", label: "Option 9" },
        { key: "12", label: "Option 10" },
      ],
    },
  ];

  return (
    <Sider collapsed={collapsed} collapsible onCollapse={onCollapse} width={siderWidth} collapsedWidth={collapsedSiderWidth}>
      <Menu items={items} ></Menu>
    </Sider>
  );
};

export default CollapseSider;
