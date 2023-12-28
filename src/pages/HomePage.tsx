// @ts-nocheck
import { Avatar, Col, Flex, Input, Row, Space, Tag, Typography } from "antd";
import React, { useEffect } from "react";
import UserAvatar from "../assets/image.jpg";
import { Link } from "react-router-dom";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import getUser from "../services/getUser.service";
import { getAllGroup } from "../services/Groups/getAllGroups.service";

const HomePage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const user = JSON.parse(localStorage.getItem("user")!);
  const { Text } = Typography;
  const [data, setData] = React.useState("");
  const [group, setGroup] = React.useState("");
  useEffect(() => {
    getUser(user.id).then((res) => {
      setData(res);

      getAllGroup(user.id, localStorage.getItem("role"), user.groupCode).then(
        (res) => {
          setGroup(res[0]);
        }
      );
    });
  }, []);
  return (
    <>
      {isMobile ? (
        <>
          <Flex vertical align="center" gap={48}>
            <Flex vertical align="center">
              <Avatar size={120} src={UserAvatar} />
              <Flex vertical gap={16} align="center">
                <Text strong>
                  {user.lastName} {user.firstName} {user.patronymic}
                </Text>
                <Text>Группа: Группа А</Text>
                <Link
                  to={"/profile/" + user.id}
                  state={{
                    id: user.id,
                    type: "Профиль",
                    firstName: user.firstName,
                    lastName: user.lastName,
                  }}
                >
                  Открыть профиль
                </Link>
              </Flex>
            </Flex>
            <Flex vertical align="left" gap={16}>
              <Text strong>Актуальный статус оплаты</Text>
              <Tag
                color="success"
                style={{
                  fontSize: 16,
                  width: "max-content",
                  padding: 10,
                  borderRadius: 20,
                }}
                icon={<CheckCircleOutlined />}
              >
                Оплачено
              </Tag>
              {/* <Link
            to={`/payment/${user.id}`}
            state={{ id: user.id, type: "Платежи" }}
          >
            Подробнее
          </Link> */}
              <Link to={`#`} state={{ id: user.id, type: "Платежи" }}>
                Подробнее
              </Link>
            </Flex>
            <Flex vertical gap={48} align="center">
              <Flex vertical align="flex-start">
                <Space direction="vertical" align="start">
                  <Text strong>Ближайшее событие</Text>
                  <div className=" h-auto border-solid border-1 border-orange-300 p-4">
                    <Row>
                      <Col span={18}>
                        <Space direction="vertical">
                          <Text type="warning">Соревнование</Text>
                          <Text strong>Название</Text>
                        </Space>
                      </Col>
                      <Col span={6}>
                        <Flex vertical align="end">
                          <div>23.02.2023</div>
                          <div>Пятница</div>
                          <div>13:30</div>
                        </Flex>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={24}>ул. Пушкина, д. Колотушкина</Col>
                    </Row>
                  </div>
                </Space>
              </Flex>
              <Flex vertical align="flex-end">
                <Space direction="vertical" align="start">
                  <Text strong>До следующего мероприятия</Text>
                  <Flex gap={5}>
                    <Flex>
                      <div className=" px-2 py-2 border border-solid border-1 border-[#D9D9D9] bg-[#E6F7FF] text-center text-xs">
                        5
                      </div>
                      <div className="py-2 px-2 border border-solid border-1 border-[#D9D9D9]  text-center text-xs">
                        Дней
                      </div>
                    </Flex>
                    <Flex>
                      <div className=" px-2 py-2 border border-solid border-1 border-[#D9D9D9] bg-[#E6F7FF] text-center text-xs">
                        10
                      </div>
                      <div className="py-2 px-2 border border-solid border-1 border-[#D9D9D9]  text-center text-xs">
                        Часов
                      </div>
                    </Flex>
                    <Flex>
                      <div className=" px-2 py-2 border border-solid border-1 border-[#D9D9D9] bg-[#E6F7FF] text-center text-xs">
                        51
                      </div>
                      <div className="py-2 px-2 border border-solid border-1 border-[#D9D9D9]  text-center text-xs">
                        Минута
                      </div>
                    </Flex>
                  </Flex>
                </Space>
              </Flex>
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          <Flex wrap="wrap" justify="space-between" className="p-5">
            <Flex>
              <Avatar size={240} src={UserAvatar} />
              <Flex vertical gap={16}>
                <Text strong>
                  {data.lastName} {data.firstName} {data.patronymic}
                </Text>
                <Text>{group ? group.groupName : "Тренер"}</Text>
                <Link
                  to={"/profile/" + data.id}
                  state={{
                    id: data.id,
                    type: "Профиль",
                    firstName: data.firstName,
                    lastName: data.lastName,
                  }}
                >
                  Открыть профиль
                </Link>
              </Flex>
            </Flex>
            <Flex vertical align="left" gap={16}>
              <Text strong>Актуальный статус оплаты</Text>
              <Tag
                color="success"
                style={{
                  fontSize: 16,
                  width: "max-content",
                  padding: 10,
                  borderRadius: 20,
                }}
                icon={<CheckCircleOutlined />}
              >
                Оплачено
              </Tag>
              {/* <Link
            to={`/payment/${user.id}`}
            state={{ id: user.id, type: "Платежи" }}
          >
            Подробнее
          </Link> */}
              <Link to={`#`} state={{ id: user.id, type: "Платежи" }}>
                Подробнее
              </Link>
            </Flex>
            <Flex vertical gap={48} align="flex-end">
              <Flex vertical align="flex-end">
                <Space direction="vertical" align="end">
                  <Text strong>Ближайшее событие</Text>
                  <div className="w-72 h-auto border-solid border-1 border-orange-300 p-4">
                    <Row>
                      <Col span={18}>
                        <Space direction="vertical">
                          <span>Соревнование</span>
                          <span>Название</span>
                        </Space>
                      </Col>
                      <Col span={6} className="text-right">
                        {" "}
                        23.02.2023 Пятница 13:30
                      </Col>
                    </Row>

                    <Row>
                      <Col span={24}>ул. Пушкина, д. Колотушкина</Col>
                    </Row>
                  </div>
                </Space>
              </Flex>
              <Flex vertical align="flex-end">
                <Space direction="vertical" align="end">
                  <Text strong>Ближайшее событие</Text>
                  <Flex gap={15}>
                    <Flex>
                      <div className=" px-3 py-2 border border-solid border-1 border-[#D9D9D9] bg-[#E6F7FF] text-center">
                        5
                      </div>
                      <div className="py-2 px-3 border border-solid border-1 border-[#D9D9D9]  text-center">
                        Дней
                      </div>
                    </Flex>
                    <Flex>
                      <div className=" px-3 py-2 border border-solid border-1 border-[#D9D9D9] bg-[#E6F7FF] text-center">
                        10
                      </div>
                      <div className="py-2 px-3 border border-solid border-1 border-[#D9D9D9]  text-center">
                        Часов
                      </div>
                    </Flex>
                    <Flex>
                      <div className=" px-3 py-2 border border-solid border-1 border-[#D9D9D9] bg-[#E6F7FF] text-center">
                        51
                      </div>
                      <div className="py-2 px-3 border border-solid border-1 border-[#D9D9D9]  text-center">
                        Минута
                      </div>
                    </Flex>
                  </Flex>
                </Space>
              </Flex>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
};

export default HomePage;
