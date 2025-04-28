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
  const contact = [
    {
      title: "經理",
      name: "陳金里",
      tel: "02-12345678",
      fax: "02-1266666",
      adress: "桃園市蘆竹區南山路2段205巷45號",
    },
    {
      title: "副理",
      name: "張富禮",
      tel: "02-12345678",
      fax: "02-1266666",
      adress: "桃園市蘆竹區南山路2段205巷45號",
    },
    {
      title: "業務主管",
      name: "蕭萬里",
      tel: "02-12345678",
      fax: "02-1266666",
      adress: "桃園市蘆竹區南山路2段205巷45號",
    },
    {
      title: "3號廠廠務",
      name: "許務克",
      tel: "02-12345678",
      fax: "02-1266666",
      adress: "桃園市蘆竹區南山路2段205巷45號",
    },
    {
      title: "雜貨店小勞闆",
      name: "岡田胖虎",
      tel: "02-12345678",
      fax: "02-1266666",
      adress: "桃園市蘆竹區南山路2段205巷45號",
    },
    {
      title: "空氣扭腰舞皇帝",
      name: "愛新覺羅志祥",
      tel: "02-12345678",
      fax: "02-1266666",
      adress: "桃園市蘆竹區南山路2段205巷45號",
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
          dataSource={contact}
          header="聯絡人列表"
          grid={{column:4}}
          bordered
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={
                  <div >
                    <p>{item.name}</p>
                    <p>{item.tel}</p>
                    <p>{item.fax}</p>
                    <p>{item.adress}</p>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}
