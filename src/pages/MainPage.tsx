import {
  Flex,
  Layout,
  Space,
  Typography,
  ConfigProvider,
  Avatar,
  theme,
  Menu,
  MenuProps,
  // Breadcrumb,
  Button,
} from "antd";
import Logo from "../components/logo";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  ContactsOutlined,
  CreditCardOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import UserAvatar from "../assets/Avatar.png";

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const [keyMenu, setKeyMenu] = useState("");
  const { firstName, lastName, id } = JSON.parse(
    localStorage.getItem("user") || "{}"
  );
  const logout = () => {
    localStorage.clear();
    navigate("/Auth", { replace: true });
  };
  const items3: MenuProps["items"] = [
    {
      key: "Профиль",
      label: "Профиль",
      icon: <UserOutlined />,
      onClick: () => {
        navigate(`/profile/${id}`, { state: { id: id } });
        setKeyMenu("Профиль");
      },
    },
    {
      key: "Группы",
      label: "Группы",
      icon: <ContactsOutlined />,
      children: [
        {
          key: "Список",
          label: "Список",
          onClick: () => {
            navigate(`/groups`, { state: { id: id } });
            setKeyMenu("Список");
          },
        },
        {
          key: "Расписание",
          label: "Расписание",
          onClick: () => {
            navigate(`/groups/shedule`, { state: { id: id } });
            setKeyMenu("Расписание");
          },
        },
      ],
    },
    {
      key: "Платежи",
      label: "Платежи",
      icon: <CreditCardOutlined />,
      onClick: () => {
        navigate(`/payments`, { state: { id: id } });
        setKeyMenu("Платежи");
      },
    },
    {
      key: "4",
      label: "Выход",
      icon: <LogoutOutlined />,
      onClick: logout,
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { Header, Sider, Content } = Layout;
  const { Title, Text } = Typography;
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <ConfigProvider
          theme={{
            token: {
              colorText: "white",
              fontFamily: "Roboto, sans-serif",
              fontSizeHeading1: 18,
            },
          }}
        >
          <Header className="text-white text-center mh-12 flex  justify-between items-center shadow-[0px_-1px_0px_0px_#F0F0F0_inset] ">
            <Link to={"/"} onClick={() => setKeyMenu("")}>
              <Flex gap={12} align="center">
                <Logo />
                <Title>Aikido</Title>
              </Flex>
            </Link>
            <Link to={`/profile/${id}`} onClick={() => setKeyMenu("Профиль")}>
              <Space size={8}>
                <Text>
                  {firstName} {lastName}
                </Text>
                <Avatar src={UserAvatar}></Avatar>
              </Space>
            </Link>
          </Header>
        </ConfigProvider>
        <Layout>
          <Sider
            width={collapsed ? 0 : 200}
            style={{
              background: colorBgContainer,
            }}
          >
            <Flex vertical justify="space-between" style={{ height: "100%" }}>
              <Menu mode="inline" selectedKeys={[keyMenu]} items={items3} />
              <Button
                type="text"
                style={{
                  textAlign: "left",
                  height: "7%",
                  borderTop: "1px solid #F0F0F0 ",
                  borderRadius: 0,
                }}
                onClick={() => setCollapsed(true)}
              >
                <MenuFoldOutlined />
              </Button>
            </Flex>
          </Sider>
          <Layout style={{ padding: "0 0 24px 0" }}>
            <Flex>
              <Button
                type="text"
                style={{
                  height: "87%",
                  width: 25,
                  padding: 0,
                  borderRadius: 0,
                  borderRight: "1px solid #F0F0F0",
                  background: colorBgContainer,
                  display: collapsed ? "block" : "none",
                }}
                onClick={() => setCollapsed(false)}
              >
                <MenuUnfoldOutlined
                  style={{ position: "relative", top: "-35%" }}
                />
              </Button>
              <Flex
                vertical
                style={{
                  background: colorBgContainer,
                  marginBottom: 19,
                  paddingLeft: 20,
                  width: "100%",
                }}
              >
                {/* <Breadcrumb
                  style={{ margin: "16px 0" }}
                  items={[
                    { title: "Home" },
                    { title: "List" },
                    { title: "App" },
                  ]}
                /> */}
                <Title style={{ marginTop: 0 }}>
                  {keyMenu.length > 0 ? keyMenu : "Главная"}
                </Title>
              </Flex>
            </Flex>
            <Content
              style={{
                padding: 24,
                margin: "0 24px 0 24px",
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default MainPage;
