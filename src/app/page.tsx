"use client";
import MyMenu from "./myMenu";
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
      <Layout>
        <Content style={{ margin: "16px" }}>
          {" "}
          {/* Add some margin/padding */}
          <Flex >
            <h1>空壓機智慧監控客戶列表</h1>
            <SearchOutlined style={{fontSize:"40px"}} />
            <Input maxLength={30} style={{ maxWidth: "200px" }} />
          </Flex>
          <Card
            title="嘉彰股份有限公司" // Changed title for clarity
            style={{ width: "100%", marginBottom: "16px" }} // Adjusted styles slightly
          >
            {" "}
            <Row>
              <Image
                src="/2.png"
                alt="fuck"
                width={300}
                style={{ border: "1px solid #8C8C8C", borderRadius: "10px" }}
              />
              <Col>
                <p>聯絡人:江新運</p>
                <p>電話 :03-3228175</p>
                <p>傳真 :03-3111652</p>
                <p>地址 :桃園市蘆竹區南山路2段205巷45號</p>
                <p>設施總數:2</p>
              </Col>
            </Row>
          </Card>
          <Card
            title="新光華造紙股份有限公司" // Changed title for clarity
            style={{ width: "100%", marginBottom: "16px" }} // Adjusted styles slightly
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {" "}
              <Image
                src="/2.png"
                alt="fuck"
                width={300}
                style={{ border: "1px solid #8C8C8C", borderRadius: "10px" }}
              />
              <div className="card-info-text">
                <div>聯絡人 : 蕭博士</div>
                <div>電話 : 049-2982011</div>
                <div>傳真 : 03-3111652</div>
                <div>地址 : 南投縣埔里鎮新生路15-1號</div>
                <div>設施總數 : 1</div>
              </div>
            </div>
          </Card>
          <Card
            title="福利麵包食品有限公司" // Changed title for clarity
            style={{ width: "100%", marginBottom: "16px" }} // Adjusted styles slightly
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Image
                src="/2.png"
                alt="fuck"
                width={300}
                style={{ border: "1px solid #8C8C8C", borderRadius: "10px" }}
              />
              <div className="card-info-text">
                <div>聯絡人 : 尹玉佩</div>
                <div>電話 : 02-25946995</div>
                <div>傳真 : 02-81924414</div>
                <div>地址 : 臺北市中山區中山北路3段23之4號1樓</div>
                <div>設施總數 : 1</div>
              </div>
            </div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}
