'use client';

import { Layout, List } from "antd";
export default function hialist() {
  const data = [{ title: "penis", description: "description" }];
  return (
    <Layout>
      <h1>佳璋詳細資料</h1>
      <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
    </Layout>
  );
}
