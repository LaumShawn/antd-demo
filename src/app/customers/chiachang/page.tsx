'use client'
import Chialist from "./list";
import MyMenu from "@/app/component/myMenu";
import Layout from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { ConfigProvider } from "antd";
 import React from "react";

export default function Page(): React.ReactElement {
  const [collapsed, setCollapsed] = useState(false);

  // These widths must match the ones used/expected by MyMenu for correct margin calculation
  const siderWidth = 200;
  const collapsedSiderWidth = 40;

  // The handler that will be passed to MyMenuF
  interface CollapseHandlerProps {
    (collapsedStatus: boolean): void;
  }

  const handleCollapse: CollapseHandlerProps = (collapsedStatus) => {
    console.log("Menu collapsed state:", collapsedStatus);
    setCollapsed(collapsedStatus);
  };
  return (
    <Layout>
      <MyMenu
        collapsed={collapsed}
        onCollapse={handleCollapse}
        collapsedSiderWidth={collapsedSiderWidth}
      />
      <ConfigProvider
      theme={{
         token:{colorPrimary:"#FFA940"}
      }
       
      }>
        <Layout
        style={{
          marginLeft: collapsed ? collapsedSiderWidth : siderWidth,
          transition: "margin-left 0.2s",
        }}
      >
        <Content style={{padding:"10px"}}>
          <Chialist />
        </Content>
 
      </Layout>
      </ConfigProvider>
      
    </Layout>
  );
}