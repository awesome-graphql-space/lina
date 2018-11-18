import React, { useState } from 'react';
import { Layout } from 'antd';

import Sidebar from '../organisms/Sidebar';

const { Header, Sider, Content } = Layout;

function DefaultTemplate ({ header, sidebar, children}) {

  // const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={false}
        style={{ height: '100vh'}}
      >
        {sidebar && sidebar}
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          {header && header}
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

DefaultTemplate.defaultProps = {
  sidebar: <Sidebar />
}

export default DefaultTemplate;