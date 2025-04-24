import React from "react";
import MyMenu from "@/app/myMenu";
import Layout from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
export default function page() {
  return (
    <Layout>
      <MyMenu />
      <Layout>
         <Content>
        <h1>5555</h1>
      </Content>
      </Layout>
     
    </Layout>
  );
}
