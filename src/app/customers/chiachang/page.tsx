import Chialist from "./list";
import MyMenu from "@/app/component/myMenu";
import Layout from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
export default function page() {
  return (
    <Layout>
      <MyMenu />
      <Layout style={{ marginLeft: 200, marginRight: 200 }}>
        <Content>
          <Chialist />
        </Content>
      </Layout>
    </Layout>
  );
}
