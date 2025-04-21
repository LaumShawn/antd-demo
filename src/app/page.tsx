"use client";
import MyMenu from "./myMenu";
import Layout, { Content } from "antd/es/layout/layout"; // Import Sider and move Content here
import { Menu, Card } from "antd";
// Removed duplicate Content import: import { Content } from "antd/es/layout/layout";
import { ConfigProvider } from "antd";
import Flex from "antd"; // Note: Flex is usually imported from 'antd', not default
import Row from "antd"; // Note: Row is usually imported from 'antd', not default
import Sider from "antd/es/layout/Sider";
const customerS = [
  {
    key: "cus1",
    lebel: "penis",
  },
  {
    key: "2",
    lebel: "p2",
  },
];

export default function Home() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {" "}
      {/* Ensure layout takes full height */}
      {/* Wrap MyMenu in Sider */}
      <Sider width={200}>
        {" "}
        {/* Adjust width and theme as needed */}
        <MyMenu />
      </Sider>
      <Layout>
        {/* Content remains in the inner Layout */}
        <Content style={{ margin: "16px" }}>
          {" "}
          {/* Add some margin/padding */}
          <h1>Penis</h1>
          <Card
            title="嘉彰股份有限公司" // Changed title for clarity
            style={{ width: "100%", marginBottom: "16px" }} // Adjusted styles slightly
          >
            <p>聯絡人:江新運</p>
            <p>電話 :03-3228175</p>
            <p>傳真 :03-3111652</p>
            <p>地址 :桃園市蘆竹區南山路2段205巷45號</p>
            <p>設施總數:2</p>
          </Card>
          <Card
            title="Example Card 2" // Changed title for clarity
            style={{ width: "100%", marginBottom: "16px" }} // Adjusted styles slightly
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card
            title="Example Card 3" // Changed title for clarity
            style={{ width: "100%", marginBottom: "16px" }} // Adjusted styles slightly
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}
