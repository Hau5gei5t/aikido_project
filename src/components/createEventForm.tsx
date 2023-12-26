import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Flex,
  Form,
  Grid,
  Input,
  Row,
  Select,
  Space,
  TimePicker,
  Typography,
} from "antd";
import voucher_codes from "voucher-code-generator";
import React from "react";
import CheckboxButton from "./checkboxButton";
import ruRU from "antd/lib/calendar/locale/ru_RU";
import { CopyOutlined } from "@ant-design/icons";
import Dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
interface Props {
  isMobile?: boolean;
}


// const sendData = (data: FieldType) => {
//   const shedule: string[] = [];
//   weekdays.forEach((day) => {
//     if (data[day]) {
//       shedule.push(
//         `${ruWeekdays[day]}: ${data[day][0].format("HH:mm")} - ${data[
//           day
//         ][1].format("HH:mm")}`
//       );
//     }
//   });
//   const req = {
//     groupName: data.groupName,
//     groupCode: data.groupCode,
//     description: data.description,
//     paymentDate: data.paymentDate.format("DD"),
//     price: data.price,
//     locationGroup: data.locationGroup,
//     shedule,
//     trainerID: JSON.parse(localStorage.getItem("user")!).id,
//   };
//   console.log(req);
// };

type FieldType = {
  [key: string]: string | Dayjs.Dayjs | Dayjs.Dayjs[] | undefined;
  groupName: string;
  groupCode: string;
  description?: string;
  paymentDate: Dayjs.Dayjs;
  price: string;
  locationGroup: string;
  Mon: Dayjs.Dayjs[];
  Fri: Dayjs.Dayjs[];
  Sat: Dayjs.Dayjs[];
  Sun: Dayjs.Dayjs[];
  Thu: Dayjs.Dayjs[];
  Tue: Dayjs.Dayjs[];
  Wed: Dayjs.Dayjs[];
};
const { Text } = Typography;
const CreateEventForm: React.FC<Props> = ({ isMobile }) => {
  return (
    <ConfigProvider theme={{ token: { borderRadius: 2 } }}>
      {isMobile ? <Mobile /> : <Desctop />}
    </ConfigProvider>
  );
};

const Mobile: React.FC<Props> = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  return (
    <>
      <Form
        form={form}
        name="createGroupForm"
        autoComplete="off"
        onFinish={(values) => {
          console.log(values);
          //   sendData(values);
        }}
      >
        <Form.Item>
          <Flex justify="space-between" vertical>
            <Flex vertical>
              <div>
                <Text strong>Название</Text>
                <Form.Item name="eventName">
                  <Input placeholder="Название мероприятия" />
                </Form.Item>
              </div>
              <div>
                <Text strong>Тип</Text>
                <Form.Item name="eventType">
                  <Select
                    placeholder="Тип мероприятия"
                    options={[
                      { label: "Соревнование", value: "competition" },
                      { label: "Конкурс", value: "contest" },
                    ]}
                  />
                </Form.Item>
              </div>
              <div>
                <Text strong>Место проведения</Text>
                <Form.Item name="eventLocation">
                  <Input placeholder="Место проведения" />
                </Form.Item>
              </div>
              <div>
                <Text strong>Цена</Text>
                <Form.Item name="eventPrice">
                  <Input placeholder="Введите цену" addonAfter="₽" />
                </Form.Item>
              </div>
            </Flex>
            <Flex vertical >
              <Text strong>Дата и время</Text>

              <Form.Item name="eventDate" className="w-full">
                <DatePicker showTime locale={ruRU} className="w-full" />
              </Form.Item>
            </Flex>
            <Flex vertical>
              <div>
                <Text strong>Выбор участников</Text>
                <Form.Item
                  name="eventGroup"
                  rules={[{ required: true, message: "" }]}
                >
                  <Select
                    placeholder="Выберите группу"
                    options={[
                      { value: "1", label: "Группа А" },
                      { value: "2", label: "Группа Б" },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  name="eventParticipants"
                  rules={[{ required: true, message: "Выберите участников" }]}
                >
                  <Select
                    className="min-w-[15rem]"
                    mode="multiple"
                    allowClear
                    placeholder="Выберите участников"
                    options={[
                      { value: "1", label: "Артем Бусов" },
                      { value: "2", label: "Максим Зиновьев" },
                    ]}
                  />
                </Form.Item>
              </div>

              <div>
                <Text strong>Описание</Text>
                <Form.Item name="eventDescription">
                  <Input.TextArea
                    rows={4}
                    showCount
                    maxLength={100}
                    placeholder="Описание"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                  />
                </Form.Item>
              </div>
            </Flex>
          </Flex>
        </Form.Item>
        <Space className="float-right">
          <Button onClick={() => navigate(-1)} className="float-right">
            Отменить
          </Button>
          <Button type="primary" htmlType="submit" className="float-right">
            Создать
          </Button>
        </Space>
      </Form>
    </>
  );
};

const Desctop: React.FC<Props> = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  return (
    <>
      <Form
        form={form}
        name="createGroupForm"
        autoComplete="off"
        onFinish={(values) => {
          console.log(values);
          //   sendData(values);
        }}
      >
        <Form.Item>
          <Flex justify="space-between">
            <Flex vertical>
              <div>
                <Text strong>Название</Text>
                <Form.Item name="eventName">
                  <Input placeholder="Название мероприятия" />
                </Form.Item>
              </div>
              <div>
                <Text strong>Тип</Text>
                <Form.Item name="eventType">
                  <Select
                    placeholder="Тип мероприятия"
                    options={[
                      { label: "Соревнование", value: "competition" },
                      { label: "Конкурс", value: "contest" },
                    ]}
                  />
                </Form.Item>
              </div>
              <div>
                <Text strong>Место проведения</Text>
                <Form.Item name="eventLocation">
                  <Input placeholder="Место проведения" />
                </Form.Item>
              </div>
              <div>
                <Text strong>Цена</Text>
                <Form.Item name="eventPrice">
                  <Input placeholder="Введите цену" addonAfter="₽" />
                </Form.Item>
              </div>
            </Flex>
            <Flex vertical className="w-96">
              <Text strong>Дата и время</Text>

              <Form.Item name="eventDate" className="w-full">
                <DatePicker showTime locale={ruRU} className="w-full" />
              </Form.Item>
            </Flex>
            <Flex vertical>
              <div>
                <Text strong>Выбор участников</Text>
                <Form.Item
                  name="eventGroup"
                  rules={[{ required: true, message: "" }]}
                >
                  <Select placeholder="Выберите группу" options={[{ value: "1", label: "Группа А"}, { value: "2", label: "Группа Б"}]} />
                </Form.Item>

                <Form.Item
                  name="eventParticipants"
                  rules={[{ required: true, message: "Выберите участников" }]}
                >
                  <Select
                  className="min-w-[15rem]"
                    mode="multiple"
                    allowClear
                    placeholder="Выберите участников"
                    options={[
                      { value: "1", label: "Артем Бусов" },
                      { value: "2", label: "Максим Зиновьев" },
                    ]}
                  />
                </Form.Item>
              </div>

              <div>
                <Text strong>Описание</Text>
                <Form.Item name="eventDescription">
                  <Input.TextArea
                    rows={4}
                    showCount
                    maxLength={100}
                    placeholder="Описание"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                  />
                </Form.Item>
              </div>
            </Flex>
          </Flex>
        </Form.Item>
        <Space className="float-right">
          <Button onClick={() => navigate(-1)} className="float-right">
            Отменить
          </Button>
          <Button type="primary" htmlType="submit" className="float-right">
            Создать
          </Button>
        </Space>
      </Form>
    </>
  );
};

export default CreateEventForm;
