"use client";
import MyMenu from "./myMenu";
import { Layout, Menu } from "antd";
import { Input } from "antd";
import { Content } from "antd/es/layout/layout";
import { Card, Image, Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { ConfigProvider } from "antd";
import styles from "./page.module.css";
import { useState } from "react";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { Button } from "antd";
// 之後改用ant design List 來做列表
export default function Home() {
  // 狀態管理每個 Card 的展開狀態
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    card1: false,
    card2: false,
    card3: false,
  });

  //  透過決定渲染資料的多寡來達成切換 Card 展開狀態
  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  // Card 內容數據
  const cardData = [
    {
      id: "card1",
      title: "嘉彰股份有限公司",
      image: "/customer/banner/1.png",
      content: {
        contact: "江新運",
        phone: "03-3228175",
        fax: "03-3111652",
        address: "桃園市蘆竹區南山路2段205巷45號",
        facilities: "2",
      },
      details:"545555" 
      , // 展開後顯示的靜態內容
    },
    {
      id: "card2",
      title: "新光華造紙股份有限公司",
      image: "/customer/banner/2.png",
      content: {
        contact: "蕭博士",
        phone: "049-2982011",
        fax: "03-3111652",
        address: "南投縣埔里鎮新生路15-1號",
        facilities: "1",
      },
      details: "這裡可以放更多詳細資訊...",
    },
    {
      id: "card3",
      title: "福利麵包食品有限公司",
      image: "/customer/banner/3.png",
      content: {
        contact: "尹玉佩",
        phone: "02-25946995",
        fax: "02-81924414",
        address: "臺北市中山區中山北路3段23之4號1樓",
        facilities: "1",
      },
      details: "這裡可以放更多詳細資訊...",
    },
    {
      id: "card4",
      title: "範例客戶有限公司",
      image: "/customer/banner/3.png",
      content: {
        contact: "尹玉佩",
        phone: "02-25946995",
        fax: "02-81924414",
        address: "臺北市中山區中山北路3段23之4號1樓",
        facilities: "1",
      },
      details: "這裡可以放更多詳細資訊...",
      
    },
    {
      id: "card5",
      title: "範例客戶有限公司",
      image: "/customer/banner/3.png",
      content: {
        contact: "尹玉佩",
        phone: "02-25946995",
        fax: "02-81924414",
        address: "臺北市中山區中山北路3段23之4號1樓",
        facilities: "1",
      },
      details: "這裡可以放更多詳細資訊...",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }} hasSider={true}>
      <MyMenu />
      {/* Adjusted inner Layout style to add marginRight */}
      <Layout style={{ marginLeft: 200, marginRight: 200 }}>
        <ConfigProvider
          theme={{
            token:{colorPrimary:'#FFA940'},
            components: {
              Card: {
                headerFontSize: "36px",
              
              },
              Button:{
                primaryColor:"#ffff",
                colorPrimaryBg:"#FFA940"
              }
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
                空壓機智慧監控客戶列表
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
                  <Col className={styles.p}>
                    <p>聯絡人: {card.content.contact}</p>
                    <p>電話: {card.content.phone}</p>
                    <p>傳真: {card.content.fax}</p>
                    <p>地址: {card.content.address}</p>
                    <p>設施總數: {card.content.facilities}</p>
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
                        href="http://localhost:3000/customers/chiachang"
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
