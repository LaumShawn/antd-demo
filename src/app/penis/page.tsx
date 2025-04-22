"use client";
import MyMenu from "../myMenu";
import { Layout, Menu } from "antd";
import { Input } from "antd";
import { Content } from "antd/es/layout/layout";
import { Card, Image, Col, Row } from "antd";
import { SearchOutlined, } from "@ant-design/icons";
import { Flex } from "antd";
import { ConfigProvider } from "antd";
import styles from "./page.module.css";
import { useState } from "react";
import Sider from "antd/es/layout/Sider";
// 之後改用ant design List 來做列表
export default function Home() {
  return (
    <Layout style={{ minHeight: "100vh" }} hasSider={true}>
     <MyMenu/>
      <Layout style={{ marginLeft: 200, marginRight: 200 }}>
        <ConfigProvider
          theme={{
            components: {
              Card: {
                headerFontSize: "36px",
              },
            },
          }}
        >
          <Content style={{ margin: "16px",width:"100%" }}>
            {/* Add some margin/padding */}
            <Flex
              justify="space-between"
              align="center"
              style={{ marginBottom: "25PX" }}
            >
              <h1 style={{ fontSize: "60px", textShadow: "2px 5px #ccc" }}>
              嘉彰股份有限公司廠區列表
              </h1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <SearchOutlined style={{ fontSize: "36px" }} />
                <Input
                  maxLength={30}
                  style={{ maxWidth: "200px", maxHeight: "40px" }}
                />
              </div>
            </Flex>
           
              
          
          </Content>
        </ConfigProvider>
        {/* Modified Sider style */}
        <Sider
          width={200} // Explicitly set width
          style={{
            position: 'fixed',
            right: 0,
            top: 0,
            height: '100vh',
            background: '#fff', // Added background for visibility
            overflow: 'auto' // Add scroll if content overflows
          }}
        >
          <ConfigProvider>
             <Menu
               items={[{
                 key:"r1",
                 label:"新增客戶",
               },
               {
                 key:"r2",
                 label:"重整列表",
               }]}
               style={{
                 // background:"#ffff", // Background is now on Sider
                 height:"100%", // Menu height remains 100% of Sider
               }}
             />
          </ConfigProvider>
        </Sider>
      </Layout>

    </Layout>
  );
}
