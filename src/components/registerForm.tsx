import {
  Button,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Typography,
  Modal,
  DatePicker,
} from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import ru_Ru from "antd/es/locale/ru_RU";
import ru from "dayjs/locale/ru";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IRegister from "../interfaces/register.interface";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Register } from "../services/register.service";
dayjs.locale(ru);
dayjs.extend(customParseFormat);

interface IFormValues extends IRegister {
  birthDate: dayjs.Dayjs;
}

const RegisterForm: React.FC = () => {
  const [data, setData] = useState<IRegister>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    patronymic: "",
    groupCode: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values: IFormValues) => {
    const {
      email,
      password,
      firstName,
      lastName,
      patronymic,
      groupCode,
      phoneNumber,
    } = values;
    const birthDate = values.birthDate.format("DD-MM-YYYY");
    const req = {
      email,
      password,
      firstName,
      lastName,
      patronymic,
      groupCode,
      birthDate,
      phoneNumber,
    };
    setData(req);
    // console.log("Success:", data);
    // localStorage.setItem("user", JSON.stringify(req));
    // Register(req);
  };
  useEffect(() => {
    setConfirmLoading(true);
    if (data.email === "") {
      setConfirmLoading(false);
      return;
    }
    Register(data)
      .then(() => {
        setOpen(false);
        setConfirmLoading(false);
        navigate(`/`, { replace: true, state:{type:"Главная"} } );
      })
      .catch((err) => {
        console.log(err);

        setOpen(false);
        setConfirmLoading(false);
      });
    
  }, [data])
  
  const copyFromClipboard = () => {
    navigator.clipboard.readText().then((text) => {
      form.setFieldsValue({
        groupCode: text,
      });
    });
  };
  const { Text } = Typography;
  const createModalForm = () => {
    setOpen(true);
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
          onFinish={createModalForm}
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
        <Modal
          open={open}
          footer={
            <Button
              key="submit"
              form="register"
              htmlType="submit"
              type="primary"
              loading={confirmLoading}
            >
              OK
            </Button>
          }
          title="Ваша группа"
        >
          <ConfigProvider
            locale={ru_Ru}
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
            <Form
              id="register"
              form={form}
              name="registerAdd"
              onFinish={onFinish}
            >
              <Text>Фамилия</Text>
              <Form.Item name="lastName">
                <Input
                  style={{ marginTop: "0.5rem" }}
                  type="text"
                  placeholder="Иванов"
                />
              </Form.Item>
              <Text>Имя</Text>
              <Form.Item name="firstName">
                <Input
                  style={{ marginTop: "0.5rem" }}
                  type="text"
                  placeholder="Иван"
                />
              </Form.Item>
              <Text>Отчество</Text>
              <Form.Item name="patronymic">
                <Input
                  style={{ marginTop: "0.5rem" }}
                  type="text"
                  placeholder="Иванович"
                />
              </Form.Item>
              <Text>Дата рождения</Text>
              <Form.Item name="birthDate">
                <DatePicker
                  style={{ width: "100%", marginTop: "0.5rem" }}
                  locale={locale}
                  format="DD.MM.YYYY"
                  getPopupContainer={(node) => node.parentNode as HTMLElement}
                />
              </Form.Item>
              <Text>Номер телефона</Text>
              <Form.Item name="phoneNumber">
                <Input
                  style={{ marginTop: "0.5rem" }}
                  type=""
                  placeholder="+71234567890"
                />
              </Form.Item>
            </Form>
          </ConfigProvider>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default RegisterForm;
