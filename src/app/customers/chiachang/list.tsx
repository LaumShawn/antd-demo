"use client";
import { Content } from "antd/es/layout/layout";
import { Layout, List } from "antd";
export default function hialist() {
  const data = [
    { title: "法定代理人", description: "宋貴修" },
    { title: "成立日期", description: "2025-01/01" },
    { title: "統一編號", description: "22164527" },
    {
      title: "所屬產業別",
      description:
        "表面處理業、電器及視聽電子產品製造業、電子零組件製造業、電腦及其週邊設備製造業、汽車及其零件製造業、模具製造業",
    },
    {
      title: "公司地址",
      description: "桃園市蘆竹區南山路2段205巷45號",
    },
    {
      title: "電話",
      description: "03-3228175",
    },
    {
      title: "傳真",
      description: "03-3111652",
    },
    {
      title: "官方網站",
      description: "http://www.chiachang.com",
    },
    {
      title: "電子信箱",
      description: "services@chiachang.com",
    },
    {
      title: "設施總數",
      description: "2",
    },
    {
      title: "營運狀況",
      description: "營運中",
    },
    {
      title: "公司地址",
      description: "桃園市蘆竹區南山路2段205巷45號",
    },
    {
      title: "公司地址",
      description: "桃園市蘆竹區南山路2段205巷45號",
    },
  ];
  return (
    <Layout>
      <Content>
        <h1>佳璋詳細資料</h1>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<a>{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<a>{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}
