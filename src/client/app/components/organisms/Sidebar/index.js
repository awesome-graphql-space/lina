import React from 'react';
import { Menu, Icon } from 'antd';

export const Sidebar = (params) => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Icon type="user" />
        <span>User</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        <span>Modules</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span>Help</span>
      </Menu.Item>
    </Menu>
  );
}

export default Sidebar;