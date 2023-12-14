import { Space, Typography, Flex, Tabs, ConfigProvider } from "antd";
import Title from "antd/es/typography/Title";
import type { TabsProps } from "antd";
import "./AuthPage.css";
import LoginForm from "../components/loginForm";
import Logo from "../components/logo";
import RegisterForm from "../components/registerForm";
import { useMediaQuery } from "react-responsive";
const AuthPage: React.FC = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 760px)",
  });
  const { Text } = Typography;
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Вход",
      children: <LoginForm />,
    },
    {
      key: "2",
      label: "Регистрация",
      children: <RegisterForm />,
    },
  ];
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              lineWidthFocus: 0,
            },
          },
          token: {
            borderRadius: 2,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
          },
        }}
      >
        <div className=" flex flex-col justify-center items-center mt-32 mb-8">
          <Space align="center">
            <Logo />
            <Title italic>Aikido</Title>
          </Space>
          <Text className=" mb-2 text-center" type="secondary">
            Эффективный инструмент, облегчающий ведение учета и организацию
            занятий
          </Text>
        </div>
        <Flex align="center" justify="start" gap="large" vertical>
          <Tabs
            style={{ width: isMobile? "90%" : "23em" }}
            tabBarExtraContent={<a href="#">Забыли пароль?</a>}
            tabBarStyle={{
              boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.06)",
              paddingBottom: "7px",
            }}
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          ></Tabs>
        </Flex>
      </ConfigProvider>
    </>
  );
};

export default AuthPage;
