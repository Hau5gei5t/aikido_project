import {
  Button,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Typography,
} from "antd";
import React from "react";

const RegisterForm: React.FC = () => {
  const [form] = Form.useForm();
  const copyFromClipboard = () => {
    navigator.clipboard.readText().then((text) => {
      form.setFieldsValue({
        groupCode: text,
      });
    });
  };
  const { Text } = Typography;
  const onFinish = (values: FieldType) => {
    const { email, password, groupCode } = values;

    const req = {
      email,
      password,
      groupCode,
    };
    console.log("Success:", req);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };
  type FieldType = {
    email: string;
    password: string;
    confirmPassword: string;
    groupCode?: string;
  };
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Form: {},
            Button: { lineWidthFocus: 0 },
          },
          token: {},
        }}
      >
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item className="mb-1">
            <Text type="danger">* Обязательные поля</Text>
          </Form.Item>
          <Form.Item<FieldType>
            name="email"
            validateTrigger="onBlur"
            rules={[
              { required: true, message: "Введите Email" },
              { type: "email", message: "Некорректный Email" },
            ]}
          >
            <Input
              placeholder="Email"
              size="large"
              prefix={<span className="text-red-500">*</span>}
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            validateTrigger="onBlur"
            rules={[{ required: true, message: "Введите пароль" }]}
          >
            <Input
              placeholder="Пароль"
              size="large"
              type="password"
              prefix={<span className="text-red-500">*</span>}
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="confirmPassword"
            dependencies={["password"]}
            validateTrigger="onChange"
            validateDebounce={1000}
            rules={[
              { required: true, message: "Повторите пароль" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Пароли не совпадают"));
                },
              }),
            ]}
          >
            <Input
              placeholder="Повторите пароль"
              size="large"
              type="password"
              prefix={<span className="text-red-500">*</span>}
            />
          </Form.Item>
          <Form.Item style={{ width: "100%" }}>
            <Flex gap={8}>
              <Form.Item<FieldType> noStyle name="groupCode">
                <Input placeholder="Код группы" size="large" />
              </Form.Item>
              <Button size="large" type="default" onClick={copyFromClipboard}>
                Ввести
              </Button>
            </Flex>
          </Form.Item>
          <Form.Item>
            <Button type="primary" style={{ width: "100%" }} htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </>
  );
};

export default RegisterForm;
