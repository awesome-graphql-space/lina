import React from 'react';
import { Menu, Icon } from 'antd';
import { withRouter, NavLink, Link } from 'react-router-dom';
import {LinaConsumer} from '../../../lina-context';
import {kebabCase} from '../../../utils/index';

const LinkComponent = props => <NavLink {...props} />;
/*
const buildNavbarItems = navBarItems => [
	{ value: 'Home', to: '/', icon: 'home', LinkComponent },
	...navBarItems.map(item => ({
		value: item,
		to: `/model/${kebabCase(item)}`,
		LinkComponent: withRouter(LinkComponent),
	})),
];*/

export const Sidebar = () => {
  return (
    <LinaConsumer>
      {({navBarItems}) => (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <div style={{ height: 64, backgroundColor: 'yellow', width: '100%' }} />
          <Menu.Item key="1">
              <Link to="/">
                <Icon type="user" />
                <span>Dashboard</span>
              </Link>
          </Menu.Item>
          {navBarItems.map((item, idx) => (
            <Menu.Item key={`${idx + 10 }`}>
              <Link to={`/table/${kebabCase(item)}`}>
                <Icon type="user" />
                <span>{item}</span>
              </Link>
            </Menu.Item>
          ))}
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>Modules</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>Help</span>
          </Menu.Item>
        </Menu>
      )}
    </LinaConsumer>
  );
}

export default Sidebar;