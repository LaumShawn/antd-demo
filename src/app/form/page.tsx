"use client";
import MyMenu from "../component/myMenu";
import { useState } from "react";
import Layout from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
const Page = () => {
  const [collapsed, setCollapsed] = useState(false);
  type FieldType = {
    username?: string;
    password?: string;
  };
  // These widths must match the ones used/expected by MyMenu for correct margin calculation
  const siderWidth = 200;
  const collapsedSiderWidth = 40;

  // The handler that will be passed to MyMenu
  interface CollapseHandlerProps {
    (collapsedStatus: boolean): void;
  }

  const handleCollapse: CollapseHandlerProps = (collapsedStatus) => {
    console.log("Menu collapsed state:", collapsedStatus);
    setCollapsed(collapsedStatus);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout>
      <MyMenu
        collapsed={collapsed}
        onCollapse={handleCollapse}
        collapsedSiderWidth={collapsedSiderWidth}
      ></MyMenu>
      <Layout
        style={{
          marginLeft: collapsed ? collapsedSiderWidth : siderWidth,
          transition: "margin-left 0.2s",
        }}
      >
        <Content>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            ></Form.Item>
            <Input />

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              
              valuePropName="checked"
              label={null}
            >
              
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <input></input>
            <p>penis</p>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Page;
