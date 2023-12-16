import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import {
  Card,
  Checkbox,
  Col,
  Divider,
  Flex,
  Progress,
  Row,
  Space,
  Typography,
} from "antd";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
type DataType = {
  key: string;
  name: string;
  count: number;
  shedule: string[];
  paymentDate: string;
  price: number;
  students: {
    key: string;
    groupKey: string;
    name: string;
    paymentstatus: "Оплачено" | "Не оплачено" | "В обработке";
    paymentDate: string;
    price: number;
  }[];
};
interface CardPaymentProps {
  item: DataType;
}

const CardPayment: React.FC<CardPaymentProps> = (props) => {
  const location = useLocation();
  const { Text } = Typography;
  const [data, setData] = React.useState(props.item);

  const [colapsed, setColapsed] = React.useState(true);
  useEffect(() => {
    if (location.state & location.state.group){
        setColapsed(location.state?.group.key !== data.key);
    }
  
  }, [colapsed])
  
  const percent = Math.round(
    (data.students.filter((student) => student.paymentstatus === "Оплачено")
      .length /
      data.students.length) *
      100
  );
  return (
    <>
      <Card size="small" title={data.name} className="w-full">
        <div>Количество участников: {data.count}</div>
        <div>
          Время занятий:{" "}
          <Space wrap>
            {data.shedule.map((text) => {
              return (
                <>
                  <span
                    key={text}
                    className="border border-solid border-[#D9D9D9] p-1 text-xs"
                  >
                    {text}
                  </span>
                </>
              );
            })}
          </Space>
        </div>
        <div>Расчётный день: {data.paymentDate}</div>
        <div>Оплата в месяц: {data.price} ₽ </div>
        <Progress percent={percent}></Progress>
        <div>
          <Flex justify="space-between">
            <Link to={`/payments`} state={{ group: data }}>
              Платежи
            </Link>
            <div
              className="cursor-pointer text-[#1677ff] hover:opacity-70 "
              onClick={() => {
                setColapsed(!colapsed);
              }}
            >
              {colapsed ? "Развернуть" : "Свернуть"}
            </div>
          </Flex>
        </div>
        {colapsed ? (
          <></>
        ) : (
          <>
            <Divider />
            <Space direction="vertical" className="w-full">
              {data.students.map((student) => {
                const disabled =
                  student.paymentstatus === "Оплачено" ||
                  student.paymentstatus === "В обработке";
                const status = () => {
                  if (student.paymentstatus === "Оплачено") {
                    return (
                      <Text type="success">
                        <CheckCircleOutlined />
                      </Text>
                    );
                  } else if (student.paymentstatus === "Не оплачено") {
                    return (
                      <Text type="danger">
                        <CloseCircleOutlined />
                      </Text>
                    );
                  } else if (student.paymentstatus === "В обработке") {
                    return (
                      <Text type="warning">
                        <ClockCircleOutlined />
                      </Text>
                    );
                  }
                };
                return (
                  <div>
                    <Flex
                      justify="space-between"
                      align="center"
                      className="w-full"
                    >
                      <Flex className="w-fit" justify="space-between">
                        <Checkbox />
                        <Link to={`/profile/${student.key}`} className="ml-2">
                          <Space size={10} className="w-full">
                            <div className="w-max">
                              {student.name} {status()}
                            </div>
                          </Space>
                        </Link>
                      </Flex>
                      <div className="flex-initial">{student.paymentDate}</div>
                    </Flex>
                    <div>
                      <Flex justify="space-between">
                        <Text
                          className="cursor-pointer text-[#1677ff] hover:opacity-70 "
                          onClick={() => {
                            setData({
                              ...data,
                              students: data.students.map((studentGroup) => {
                                if (studentGroup.key === student.key) {
                                  return {
                                    ...studentGroup,
                                    paymentstatus: "Оплачено",
                                  };
                                }
                                return studentGroup;
                              }),
                            });
                          }}
                          disabled={disabled}
                          style={{ pointerEvents: disabled ? "none" : "auto" }}
                        >
                          Зафиксировать оплату
                        </Text>
                        {/* <div>История платежей</div> */}
                      </Flex>
                    </div>
                  </div>
                );
              })}
            </Space>
          </>
        )}
      </Card>
    </>
  );
};

export default CardPayment;
