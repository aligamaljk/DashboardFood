import { Avatar, Badge, Button, Layout, Switch, theme } from "antd"
import "./MainLayout.scss"
import { Content, Header } from "antd/es/layout/layout"
import { Outlet } from "react-router"
import Sider from "antd/es/layout/Sider"
import { MdLightMode,MdDarkMode } from 'react-icons/md';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useState } from "react"
import SidebarMenu from './SidebarMenu';
import { useAppDispatch, useAppSelector } from "../Store/hooks"
import { setDark } from "../Store/user/UserSlice"
const MainLayout = () => {
const [collapsed, setCollapsed] = useState(false);
const {token: { colorBgContainer, borderRadiusLG },} = theme.useToken();
const dispatch = useAppDispatch();
const {dark} = useAppSelector((state) => state.user)
  return (
    <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider
          width={282}
          breakpoint="lg"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'sticky',
            left: 0,
            top: 0,
            bottom: 0,
            background: colorBgContainer,
          }}
        >
          <SidebarMenu />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                paddingRight: 40,
              }}
            >
              {/* <Badge
                color="#52c41a"
                dot={true}
                count={1}
              >
                <Avatar size="small">A</Avatar>
              </Badge> */}
              <Badge dot>
                <Avatar shape="square" icon={<UserOutlined />} />
              </Badge>
              <Switch
                checkedChildren={<MdDarkMode />}
                unCheckedChildren={<MdLightMode />}
                defaultChecked={dark}
                checked={dark}
                onChange={(e) => {
                  dispatch(setDark(e));
                }}
              />
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default MainLayout