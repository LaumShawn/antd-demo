"use client";
import MyMenu from "../myMenu";
import { Layout, Menu } from "antd";
import { Button } from "antd";
import { Input } from "antd";
import { Content } from "antd/es/layout/layout";
import { Card, Image, Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { ConfigProvider } from "antd";
import style from "../page.module.css"
import { useState } from "react";
import Sider from "antd/es/layout/Sider";
// 之後改用ant design List 來做列表
export default function Home() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    card1: false,
    card2: false,
    card3: false,
  });

  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };
  const cardData = [
    {
      id: "fac1",
      title: "烤漆廠",
      image:"/customer/banner/1.png",
      content: {
        contact: "烤漆廠務",
        phone: "03-3228175",
        fax: "03-3111652",
        address: "桃園市蘆竹區南山路2段205巷45號",
        statuse:"營運中"
      },
      details:"dfsdgsg"
    },
  ];
  return (
    <Layout style={{ minHeight: "100vh" }} hasSider={true}>
      <MyMenu />
      <Layout style={{ marginLeft: 200, marginRight: 200 }}>
        <ConfigProvider
          theme={{
            token:{colorPrimary:"#FFA940"},
            components: {
              Card: {
                headerFontSize: "36px",
              },
            },
          }}
        >
          <Content style={{ margin: "16px", width: "100%" }}>
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
            {cardData.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                style={{
                  width: "100%",
                  marginBottom: "16px",
                  cursor: "pointer", // 添加手勢指針
                }}
                hoverable
                onClick={() => toggleCard(card.id)}
              >
                <Row>
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={300}
                    style={{
                      border: "1px solid #8C8C8C",
                      borderRadius: "10px",
                    }}
                  />
                  <Col >
                    <p>聯絡人: {card.content.contact}</p>
                    <p>電話: {card.content.phone}</p>
                    <p>傳真: {card.content.fax}</p>
                    <p>地址: {card.content.address}</p>
                    <p>運營狀態: {card.content.statuse}</p>
                  </Col>
                </Row>

                {/* 展開的內容 */}
                {expandedCards[card.id] && (
                  <div
                    style={{
                      marginTop: 16,
                      padding: 16,
                      backgroundColor: "#ffff",
                      display: "flex",
                      borderRadius: 8,
                    }}
                  >
                    <div>{card.details}</div>
                    {/* 可以在這裡添加更多展開後的內容 */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        width: "100%",
                      }}
                    >
                      <Button
                        href="http://localhost:3000/facility"
                        shape="round"
                        style={{ margin: "10px" }}
                        type="primary"
                      >
                        檢視客戶資料
                      </Button>
                      <Button
                        href="http://localhost:3000/facility"
                        shape="round"
                        style={{ margin: "10px" }}
                        type="primary"
                      >
                        檢視設施列表
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </Content>
        </ConfigProvider>
        {/* Modified Sider style */}
        <Sider
          width={200} // Explicitly set width
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            height: "100vh",
            background: "#fff", // Added background for visibility
            overflow: "auto", // Add scroll if content overflows
          }}
        >
          <ConfigProvider>
            <Menu
              items={[
                {
                  key: "r1",
                  label: "新增客戶",
                },
                {
                  key: "r2",
                  label: "重整列表",
                },
              ]}
              style={{
                // background:"#ffff", // Background is now on Sider
                height: "100%", // Menu height remains 100% of Sider
              }}
            />
          </ConfigProvider>
        </Sider>
      </Layout>
    </Layout>
  );
}
