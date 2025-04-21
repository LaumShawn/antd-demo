"use client";
import MyMenu from "../myMenu";
import { Layout } from "antd";
import {Input} from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Card, Image, Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {Flex} from "antd";
// 之後改用ant design List 來做列表
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
   
    </Layout>
  );
}
