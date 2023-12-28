// @ts-nocheck
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
import { updateGroup } from "../services/Groups/updateGroup.service";
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

const sendData = (data: FieldType, id: string) => {
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
    groupName: data.groupName,
    groupCode: data.groupCode,
    description: data.description,
    paymentDate: data.paymentDate.format("DD"),
    price: data.price,
    locationGroup: data.locationGroup,
    shedule,
  };
  // console.log(id);

  updateGroup(id, req);

  // console.log(req);
};

type FieldType = {
  [key: string]: string | Dayjs.Dayjs | Dayjs.Dayjs[] | undefined | number;
  id: number;
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
const EditGroupForm: React.FC<Props> = ({ isMobile }) => {
  return (
    <ConfigProvider theme={{ token: { borderRadius: 2 } }}>
      {isMobile ? <Mobile /> : <Desctop />}
    </ConfigProvider>
  );
};

const Mobile: React.FC<Props> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const [disabledInputs, setDisabledInputs] = React.useState<{
    [key: string]: boolean;
  }>({
    Mon: !location.state.group.shedule.some((el: string) => el.includes("Пн")),
    Tue: !location.state.group.shedule.some((el: string) => el.includes("Вт")),
    Wed: !location.state.group.shedule.some((el: string) => el.includes("Ср")),
    Thu: !location.state.group.shedule.some((el: string) => el.includes("Чт")),
    Fri: !location.state.group.shedule.some((el: string) => el.includes("Пт")),
    Sat: !location.state.group.shedule.some((el: string) => el.includes("Сб")),
    Sun: !location.state.group.shedule.some((el: string) => el.includes("Вс")),
  });
  const weekdaysData: {
    Mon: Dayjs.Dayjs[];
    Tue: Dayjs.Dayjs[];
    Wed: Dayjs.Dayjs[];
    Thu: Dayjs.Dayjs[];
    Fri: Dayjs.Dayjs[];
    Sat: Dayjs.Dayjs[];
    Sun: Dayjs.Dayjs[];
  } = {
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  };
  location.state.group.shedule.forEach((str: string) => {
    if (str.includes("Пн") && weekdaysData.Mon.length < 2) {
      weekdaysData.Mon = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
    if (str.includes("Вт") && weekdaysData.Tue.length < 2) {
      weekdaysData.Tue = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
    if (str.includes("Ср") && weekdaysData.Wed.length < 2) {
      weekdaysData.Wed = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
    if (str.includes("Чт") && weekdaysData.Thu.length < 2) {
      weekdaysData.Thu = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
    if (str.includes("Пт") && weekdaysData.Fri.length < 2) {
      weekdaysData.Fri = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
    if (str.includes("Сб") && weekdaysData.Sat.length < 2) {
      weekdaysData.Sat = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
    if (str.includes("Вс") && weekdaysData.Sun.length < 2) {
      weekdaysData.Sun = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
  });
  console.log(disabledInputs);
  const inputData: FieldType = {
    id: location.state.group.key,
    groupName: location.state.group.name,
    groupCode: location.state.group.groupCode,
    description: location.state.group.note,
    paymentDate: Dayjs(location.state.group.paymentDate),
    price: location.state.group.price,
    locationGroup: location.state.group.location,
    Mon: weekdaysData.Mon,
    Tue: weekdaysData.Tue,
    Wed: weekdaysData.Wed,
    Thu: weekdaysData.Thu,
    Fri: weekdaysData.Fri,
    Sat: weekdaysData.Sat,
    Sun: weekdaysData.Sun,
  };
  return (
    <>
      <Form
        form={form}
        name="createGroupForm"
        autoComplete="off"
        onFinish={(values) => {
          console.log(values);
          sendData(values);
        }}
        initialValues={inputData}
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
                            value={!disabledInputs[day]}
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
            Сохранить
          </Button>
        </Space>
      </Form>
    </>
  );
};

const Desctop: React.FC<Props> = () => {
  const location = useLocation();
  console.log(location.state.group);
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const [disabledInputs, setDisabledInputs] = React.useState<{
    [key: string]: boolean;
  }>({
    Mon: !location.state.group.shedule.some((el: string) => el.includes("Пн")),
    Tue: !location.state.group.shedule.some((el: string) => el.includes("Вт")),
    Wed: !location.state.group.shedule.some((el: string) => el.includes("Ср")),
    Thu: !location.state.group.shedule.some((el: string) => el.includes("Чт")),
    Fri: !location.state.group.shedule.some((el: string) => el.includes("Пт")),
    Sat: !location.state.group.shedule.some((el: string) => el.includes("Сб")),
    Sun: !location.state.group.shedule.some((el: string) => el.includes("Вс")),
  });
  const weekdaysData: {
    Mon: Dayjs.Dayjs[];
    Tue: Dayjs.Dayjs[];
    Wed: Dayjs.Dayjs[];
    Thu: Dayjs.Dayjs[];
    Fri: Dayjs.Dayjs[];
    Sat: Dayjs.Dayjs[];
    Sun: Dayjs.Dayjs[];
  } = {
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  };
  location.state.group.shedule.forEach((str: string) => {
    if (str.includes("Пн") && weekdaysData.Mon.length < 2) {
      weekdaysData.Mon = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
    if (str.includes("Вт") && weekdaysData.Tue.length < 2) {
      weekdaysData.Tue = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
    if (str.includes("Ср") && weekdaysData.Wed.length < 2) {
      weekdaysData.Wed = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
    if (str.includes("Чт") && weekdaysData.Thu.length < 2) {
      weekdaysData.Thu = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
    if (str.includes("Пт") && weekdaysData.Fri.length < 2) {
      weekdaysData.Fri = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
    if (str.includes("Сб") && weekdaysData.Sat.length < 2) {
      weekdaysData.Sat = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
    if (str.includes("Вс") && weekdaysData.Sun.length < 2) {
      weekdaysData.Sun = [
        Dayjs(str.slice(4, 17).split(" - ")[0], "HH:mm"),
        Dayjs(str.slice(4, 17).split(" - ")[1], "HH:mm"),
      ];
    }
  });
  console.log(disabledInputs);
  const inputData: FieldType = {
    id: location.state.group.key,
    groupName: location.state.group.groupName,
    groupCode: location.state.group.groupCode,
    description: location.state.group.description,
    paymentDate: Dayjs(location.state.group.paymentDate, "DD"),
    price: location.state.group.price,
    locationGroup: location.state.group.locationGroup,
    Mon: weekdaysData.Mon,
    Tue: weekdaysData.Tue,
    Wed: weekdaysData.Wed,
    Thu: weekdaysData.Thu,
    Fri: weekdaysData.Fri,
    Sat: weekdaysData.Sat,
    Sun: weekdaysData.Sun,
  };

  return (
    <>
      <Form
        form={form}
        name="createGroupForm"
        autoComplete="off"
        onFinish={(values) => {
          console.log(values);
          sendData(values, location.state.group.id);
          navigate(-1);
        }}
        initialValues={inputData}
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
                            value={!disabledInputs[day]}
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
            Сохранить
          </Button>
        </Space>
      </Form>
    </>
  );
};

export default EditGroupForm;
