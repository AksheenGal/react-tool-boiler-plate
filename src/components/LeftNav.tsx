import React from 'react';
import { Menu } from 'antd';
import "antd/dist/antd.css";
import { NavLink, useLocation } from 'react-router-dom'

const headerHeight = 55;


const LeftNav = () => {
  const location = useLocation();
  return (
    <div style={{ height: window.innerHeight - headerHeight }}>
      <Menu
        theme="dark"
        style={{ width: 200, height: '100%' }}
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
      >

        <Menu.ItemGroup key="g1">
          <Menu.Item key="/"><NavLink to="/">All Country</NavLink></Menu.Item>
          <Menu.Item key="/search"><NavLink to="/search">Search Country</NavLink></Menu.Item>
          <Menu.Item key="/countryChart"><NavLink to="/countryChart">Country By Charts</NavLink></Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </div>
  );
};

export default LeftNav;