// @ts-nocheck
import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Flex,
  Form,
  Input,
  Row,
  Space,
  TimePicker,
  Typography,
} from "antd";
import voucher_codes from "voucher-code-generator";
import React, { useEffect } from "react";
import CheckboxButton from "./checkboxButton";
import ruRU from "antd/lib/calendar/locale/ru_RU";
import { CopyOutlined } from "@ant-design/icons";
import Dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import { createGroup } from "../services/Groups/createGroup.service";
import { getAllGroup } from "../services/Groups/getAllGroups.service";
interface Props {
  isMobile?: boolean;
}

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const ruWeekdays: { [key: string]: string } = {
  Mon: "Пн",
  Tue: "Вт",
  Wed: "Ср",
  Thu: "Чт",
  Fri: "Пт",
  Sat: "Сб",
  Sun: "Вс",
};

const sendData = (data: FieldType, trainerID: string, id) => {
  const shedule: string[] = [];
  weekdays.forEach((day) => {
    if (data[day] && data[day]!.length === 2) {
      shedule.push(
        `${ruWeekdays[day]}: ${data[day][0].format("HH:mm")} - ${data[
          day
        ][1].format("HH:mm")} `
      );
    }
  });
  const req = {
    id: id,
    groupName: data.groupName,
    groupCode: data.groupCode,
    description: data.description,
    paymentDate: data.paymentDate.format("DD"),
    price: data.price,
    locationGroup: data.locationGroup,
    shedule,
    trainerID: trainerID,
    students: [],
    count: 0,
  };
  // console.log(id);

  // updateGroup(id, req);
  createGroup(req);

  // console.log(req);
};

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
const CreateGroupForm: React.FC<Props> = ({ isMobile }) => {
  return (
    <ConfigProvider theme={{ token: { borderRadius: 2 } }}>
      {isMobile ? <Mobile /> : <Desctop />}
    </ConfigProvider>
  );
};

const Mobile: React.FC<Props> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [disabledInputs, setDisabledInputs] = React.useState<{
    [key: string]: boolean;
  }>({
    Mon: true,
    Tue: true,
    Wed: true,
    Thu: true,
    Fri: true,
    Sat: true,
    Sun: true,
  });
  const [groupID, setGroupID] = React.useState("");
  useEffect(() => {
    getAllGroup(0, "all").then((res) => {
      setGroupID(res.length + 1);
    });
  }, []);

  const [form] = Form.useForm();
  return (
    <>
      <Form
        form={form}
        name="createGroupForm"
        autoComplete="off"
        onFinish={(values) => {
          console.log(values);
          sendData(
            values,
            JSON.parse(localStorage.getItem("user")!).id,
            groupID
          );
        }}
      >
        <Form.Item>
          <Flex vertical gap={10}>
            <Flex vertical>
              <Text strong>Название</Text>
              <Form.Item
                name="groupName"
                rules={[{ required: true, message: "Введите название группы" }]}
              >
                <Input placeholder="Название группы" />
              </Form.Item>
              <Flex>
                <Flex vertical>
                  <Text strong>Расписание</Text>
                  {weekdays.map((day: string) => {
                    function onChangeButton(value: boolean) {
                      setDisabledInputs({ ...disabledInputs, [day]: !value });
                    }

                    return (
                      <Row key={day} className="w-full">
                        <Col span={5}>
                          <CheckboxButton
                            onChangeButton={onChangeButton}
                            label={ruWeekdays[`${day}`]}
                          />
                        </Col>
                        <Col span={19}>
                          <Form.Item name={day} className="m-0 h-10">
                            <TimePicker.RangePicker
                              className="h-10"
                              format={"HH:mm"}
                              locale={ruRU}
                              disabled={disabledInputs[day]}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    );
                  })}
                </Flex>
              </Flex>
            </Flex>
            <Flex vertical>
              <Text strong>Код приглашения</Text>

              <Space.Compact>
                <Form.Item
                  name="groupCode"
                  rules={[{ required: true, message: "Введите код группы" }]}
                >
                  <Input placeholder="Код группы" />
                </Form.Item>
                <Button
                  type="primary"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      form.getFieldValue("groupCode")
                    );
                  }}
                >
                  <CopyOutlined />
                </Button>
              </Space.Compact>

              <Form.Item>
                <Button
                  className="w-full"
                  type="primary"
                  onClick={() => {
                    form.setFieldsValue({
                      groupCode: voucher_codes.generate({
                        length: 10,
                        charset: voucher_codes.charset("alphanumeric"),
                      })[0],
                    });
                  }}
                >
                  Сгенерировать новый код
                </Button>
              </Form.Item>
            </Flex>
            <Flex vertical>
              <div>
                <Text strong>Место проведения</Text>
                <Form.Item
                  name="locationGroup"
                  rules={[
                    { required: true, message: "Введите место проведения" },
                  ]}
                >
                  <Input placeholder="Место проведения" />
                </Form.Item>
              </div>
              <div>
                <Text strong>Цена на человека</Text>
                <Form.Item
                  name="price"
                  rules={[{ required: true, message: "Введите цену" }]}
                >
                  <Input placeholder="Введите цену" addonAfter="₽/мес" />
                </Form.Item>
              </div>
              <div>
                <Text strong>Расчетный день</Text>
                <Form.Item
                  name="paymentDate"
                  rules={[{ required: true, message: "Выберите день" }]}
                >
                  <DatePicker
                    popupStyle={{ width: "20rem" }}
                    placement="bottomRight"
                    locale={ruRU}
                    format={"DD.MM.YYYY"}
                  />
                </Form.Item>
              </div>
              <div>
                <Text strong>Заметки</Text>
                <Form.Item name="description">
                  <Input.TextArea
                    rows={4}
                    showCount
                    maxLength={100}
                    placeholder="Заметки для важной (и не очень) информации, их можете увидеть только вы"
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
  const [disabledInputs, setDisabledInputs] = React.useState<{
    [key: string]: boolean;
  }>({
    Mon: true,
    Tue: true,
    Wed: true,
    Thu: true,
    Fri: true,
    Sat: true,
    Sun: true,
  });
  const [groupID, setGroupID] = React.useState("");
  useEffect(() => {
    getAllGroup(0, "all").then((res) => {
      setGroupID(res.length + 1);
    });
  }, []);
  const [form] = Form.useForm();
  return (
    <>
      <Form
        form={form}
        name="createGroupForm"
        autoComplete="off"
        onFinish={(values) => {
          console.log(values);
          sendData(
            values,
            JSON.parse(localStorage.getItem("user")!).id,
            groupID
          );
          navigate(-1);
        }}
      >
        <Form.Item>
          <Flex justify="space-between">
            <Flex vertical>
              <Text strong>Название</Text>
              <Form.Item
                name="groupName"
                rules={[{ required: true, message: "Введите название группы" }]}
              >
                <Input placeholder="Название группы" />
              </Form.Item>
              <Flex>
                <Flex vertical>
                  <Text strong>Расписание</Text>
                  {weekdays.map((day: string) => {
                    function onChangeButton(value: boolean) {
                      setDisabledInputs({ ...disabledInputs, [day]: !value });
                    }

                    return (
                      <Row key={day} className="w-full">
                        <Col span={5}>
                          <CheckboxButton
                            onChangeButton={onChangeButton}
                            label={ruWeekdays[`${day}`]}
                          />
                        </Col>
                        <Col span={19}>
                          <Form.Item name={day} className="m-0 h-10">
                            <TimePicker.RangePicker
                              className="h-10"
                              format={"HH:mm"}
                              locale={ruRU}
                              disabled={disabledInputs[day]}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    );
                  })}
                </Flex>
              </Flex>
            </Flex>
            <Flex vertical>
              <Text strong>Код приглашения</Text>

              <Space.Compact>
                <Form.Item
                  name="groupCode"
                  rules={[{ required: true, message: "Введите код группы" }]}
                >
                  <Input placeholder="Код группы" />
                </Form.Item>
                <Button
                  type="primary"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      form.getFieldValue("groupCode")
                    );
                  }}
                >
                  <CopyOutlined />
                </Button>
              </Space.Compact>

              <Form.Item>
                <Button
                  className="w-full"
                  type="primary"
                  onClick={() => {
                    form.setFieldsValue({
                      groupCode: voucher_codes.generate({
                        length: 10,
                        charset: voucher_codes.charset("alphanumeric"),
                      })[0],
                    });
                  }}
                >
                  Сгенерировать новый код
                </Button>
              </Form.Item>
            </Flex>
            <Flex vertical>
              <div>
                <Text strong>Место проведения</Text>
                <Form.Item
                  name="locationGroup"
                  rules={[
                    { required: true, message: "Введите место проведения" },
                  ]}
                >
                  <Input placeholder="Место проведения" />
                </Form.Item>
              </div>
              <div>
                <Text strong>Цена на человека</Text>
                <Form.Item
                  name="price"
                  rules={[{ required: true, message: "Введите цену" }]}
                >
                  <Input placeholder="Введите цену" addonAfter="₽/мес" />
                </Form.Item>
              </div>
              <div>
                <Text strong>Расчетный день</Text>
                <Form.Item
                  name="paymentDate"
                  rules={[{ required: true, message: "Выберите день" }]}
                >
                  <DatePicker locale={ruRU} format={"DD.MM.YYYY"} />
                </Form.Item>
              </div>
              <div>
                <Text strong>Заметки</Text>
                <Form.Item name="description">
                  <Input.TextArea
                    rows={4}
                    showCount
                    maxLength={100}
                    placeholder="Заметки для важной (и не очень) информации, их можете увидеть только вы"
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

export default CreateGroupForm;
