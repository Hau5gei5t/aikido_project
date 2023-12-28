// @ts-nocheck
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
  Button,
  Breadcrumb,
  Row,
} from "antd";
import Logo from "../components/logo";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  ContactsOutlined,
  CreditCardOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import UserAvatar from "../assets/image.jpg";
import { useMediaQuery } from "react-responsive";
import { Dropdown } from "antd-mobile";

const MainPage: React.FC = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 760px)",
  });
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state);

  const [collapsed, setCollapsed] = useState(true);
  const { firstName, lastName } = JSON.parse(
    localStorage.getItem("user") || "{}"
  );
  const { id } = JSON.parse(localStorage.getItem("user") || "{}");

  // const breadcrumbItems = [{title: "Главная", href: "/"}];
  // location.pathname.split("/").slice(1, location.pathname.split("/").length-1).forEach((item) => {
  //   breadcrumbItems.push({title: item, href: `/${item}`});
  // });
  // breadcrumbItems.push({title: location.pathname.split("/").pop()?.toString() });

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
        localStorage.setItem("type", "Профиль");
        setCollapsed(true);
        navigate(`/profile/${id}`, {
          state: {
            id: id,
            type: "Профиль",
            firstName: firstName,
            lastName: lastName,
          },
        });
      },
    },
    {
      key: "Группы",
      label: "Группы",
      icon: <ContactsOutlined />,
      children: [
        {
          key: "Список групп",
          label: "Список групп",
          onClick: () => {
            localStorage.setItem("type", "Список групп");
            setCollapsed(true);
            navigate(`/groups`, { state: { id: id, type: "Список групп" } });
          },
        },
        {
          key: "Расписание",
          label: "Расписание",
          onClick: () => {
            localStorage.setItem("type", "Расписание");
            setCollapsed(true);
            navigate(`/groups/shedule`, {
              state: { id: id, type: "Расписание" },
            });
          },
        },
      ],
    },
    {
      key: "Платежи",
      label: "Платежи",
      icon: <CreditCardOutlined />,
      onClick: () => {
        localStorage.setItem("type", "Платежи");
        setCollapsed(true);
        navigate(`/payments`, { state: { id: id, type: "Платежи" } });
      },
    },
    {
      key: "4",
      label: "Выход",
      icon: <LogoutOutlined />,
      onClick: logout,
    },
  ];
  const getData = () => {
    if (location.state) {
      return location.state;
    }
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user")!);
      return {
        id: user.id,
        type: localStorage.getItem("type"),
        firstName: user.firstName,
        lastName: user.lastName,
      };
    }
  };
  const data = getData();
  const titleText = (type: string, firstName?: string, lastName?: string) => {
    switch (type) {
      case "Редактирование группы":
        return `Редактирование группы: ${location.state.group!.groupName}`;
      case "Профиль":
        return `Профиль пользователя ${firstName} ${lastName}`;
      case "Группа": {
        const group = location.state.group;
        return `Группа ${group!.groupName}`;
      }
      default:
        return type;
    }
  };
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
          {isMobile ? (
            <>
              <Header className="text-white text-center flex justify-between items-center shadow-[0px_-1px_0px_0px_#F0F0F0_inset] ">
                <Link
                  to={"/"}
                  onClick={() => localStorage.setItem("type", "Главная")}
                  state={{ id: id, type: "Главная" }}
                >
                  <Flex gap={12} align="center">
                    <Logo />
                  </Flex>
                </Link>
                <div>
                  <Space size="small">
                    <Dropdown
                      arrow={<></>}
                      style={{ color: "white", backgroundColor: "transparent" }}
                    >
                      <Dropdown.Item
                        key="sorter"
                        title={
                          collapsed ? (
                            <MenuUnfoldOutlined size={90} />
                          ) : (
                            <MenuFoldOutlined size={90} />
                          )
                        }
                        highlight={false}
                      >
                        <div>
                          <Menu
                            mode="inline"
                            selectedKeys={[data.type]}
                            items={items3}
                            style={{ color: "black" }}
                          />
                        </div>
                      </Dropdown.Item>
                    </Dropdown>

                    <Link
                      to={`/profile/${id}`}
                      onClick={() => {
                        localStorage.setItem("type", "Профиль");
                      }}
                      state={{
                        id: id,
                        type: "Профиль",
                        firstName: firstName,
                        lastName: lastName,
                      }}
                    >
                      <Avatar src={UserAvatar}></Avatar>
                    </Link>
                  </Space>
                </div>
              </Header>
            </>
          ) : (
            <>
              <Header className="text-white text-center mh-12 flex  justify-between items-center shadow-[0px_-1px_0px_0px_#F0F0F0_inset] ">
                <Link
                  to={"/"}
                  onClick={() => localStorage.setItem("type", "Главная")}
                  state={{ id: id, type: "Главная" }}
                >
                  <Flex gap={12} align="center">
                    <Logo />
                  </Flex>
                </Link>
                <Link
                  to={`/profile/${id}`}
                  onClick={() => localStorage.setItem("type", "Профиль")}
                  state={{
                    id: id,
                    type: "Профиль",
                    firstName: firstName,
                    lastName: lastName,
                  }}
                >
                  <Space size={8}>
                    <Text>
                      {firstName} {lastName}
                    </Text>
                    <Avatar src={UserAvatar}></Avatar>
                  </Space>
                </Link>
              </Header>
            </>
          )}
        </ConfigProvider>
        <Layout>
          {isMobile ? (
            <>
              <Flex
                vertical
                style={{
                  marginTop: 10,
                  background: colorBgContainer,
                  marginBottom: 19,
                  paddingLeft: 20,
                  width: "100%",
                }}
              >
                {/* <Breadcrumb
                  style={{ margin: "16px 0" }}
                  items={breadcrumbItems}
                /> */}
                <Title style={{ marginTop: 0, fontSize: 35 }}>
                  {titleText(data.type, data.firstName, data.lastName)}
                </Title>
              </Flex>
              <Content
                style={{
                  padding: 12,
                  margin: "0 24px 0 24px",
                  minHeight: 280,
                  background: colorBgContainer,
                }}
              >
                <Outlet />
              </Content>
            </>
          ) : (
            <>
              <Sider
                width={collapsed ? 0 : 200}
                style={{
                  background: colorBgContainer,
                }}
              >
                <Flex
                  vertical
                  justify="space-between"
                  style={{ height: "100%" }}
                >
                  <Menu
                    mode="inline"
                    selectedKeys={[data.type]}
                    items={items3}
                  />
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
                <Flex align="stretch">
                  <Button
                    type="text"
                    style={{
                      borderRadius: 0,
                      height: "77%",
                      borderRight: "1px solid #F0F0F0",
                      background: colorBgContainer,
                      display: collapsed ? "inline-block" : "none",
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
                  items={breadcrumbItems}
                /> */}
                    <Title style={{ marginTop: 0 }}>
                      {titleText(data.type, data.firstName, data.lastName)}
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
            </>
          )}
        </Layout>
      </Layout>
    </>
  );
};

export default MainPage;
