"use client";
import MyMenu from "./myMenu";
import Layout from "antd/es/layout/layout";
import { Menu } from "antd";
import { Content } from "antd/es/layout/layout"; //小心!!跟nextjs有重名
import { ConfigProvider } from "antd";
import Flex from "antd";
import Row from "antd";
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
    <Layout>
      <MyMenu></MyMenu>
      <Layout>
        
          <Content style={{ margin: "0 16px" }}>
          <h1>Penis</h1>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              marginLeft:"50px",
              minWidth: "990px",
              height: "250px",
              background: "wheat",
              border:"1px",
              borderRadius:"10px",
              marginBottom:"10px"
            }}
          >
           
          </div>
         
          <div
            style={{
              padding: 24,
              minHeight: 360,
              marginLeft:"50px",
              minWidth: "990px",
              height: "250px",
              background: "wheat",
              border:"1px",
              borderRadius:"10px",
              marginBottom:"10px"
            }}
          >
            Bill is a cat.
          </div>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              marginLeft:"50px",
              minWidth: "990px",
              height: "250px",
              background: "wheat",
              border:"1px",
              borderRadius:"10px",
              marginBottom:"10px"
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Content>
          <h2>penis</h2>
        </Content>
        
        
      </Layout>
    </Layout>
  );
}
