import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/MainLayout.css";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={`main-layout ${collapsed ? "collapsed" : ""}`}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="main-content">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
