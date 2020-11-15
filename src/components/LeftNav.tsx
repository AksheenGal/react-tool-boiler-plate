import React from 'react';
import { Menu } from 'antd';
import "antd/dist/antd.css";
import { NavLink } from 'react-router-dom'

const headerHeight = 55;


const LeftNav = () => {

  return (
    <div style={{ height: window.innerHeight - headerHeight }}>
      <Menu
        style={{ width: 200 }}
        defaultSelectedKeys={['1']}
        mode="inline"
      >

        <Menu.ItemGroup key="g1">
          <Menu.Item key="1"><NavLink to="/">All Country</NavLink></Menu.Item>
          <Menu.Item key="2"><NavLink to="/search">Search Country</NavLink></Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </div>
  );
};

export default LeftNav;