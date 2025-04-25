// src/App.jsx
'use client'
import React, { useState } from "react";
import { Layout } from "antd";
import CollapseSider from "../component/CollapseSider"; // Import the exported component

const {  Content, } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

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

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Render the exported MyMenu component */}
      {/* Pass state, handler, and any customization props */}
      <CollapseSider
        collapsed={collapsed}
        onCollapse={handleCollapse}
        collapsedSiderWidth={collapsedSiderWidth}
      />

      {/* The Content Area Layout */}
      {/* Adjust marginLeft based on the state managed HERE in the parent */}
      <Layout
        style={{
          marginLeft: collapsed ? collapsedSiderWidth : siderWidth,
          transition: "margin-left 0.2s", // Smooth transition for content shift
        }}
      >
        
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              textAlign: "center",
              minHeight: "calc(100vh - 112px)" /* Adjust height as needed */,
            }}
          >
            <h1>Main Content Area</h1>
            <p>
              This area expands/contracts because its parent Layout's
              `marginLeft` is updated when the state changes.
            </p>
            {/* --- YOUR MAIN PAGE CONTENT GOES HERE --- */}
            <p>Current menu state: {collapsed ? "Collapsed" : "Expanded"}</p>
          </div>
        </Content>
        
      </Layout>
    </Layout>
  );
};

export default App;
