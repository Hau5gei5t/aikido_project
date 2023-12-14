import { CopyOutlined } from "@ant-design/icons";
import { Card, Divider, Flex, Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
interface DataType {
  key: string;
  name: string;
  count: number;
  shedule: string[];
  groupCode: string;
  paymentDate: string;
  note: string;
}
interface PropsType {
  item: DataType;
}
const cardGroup: React.FC<PropsType> = (props) => {
  const { Text } = Typography;
  const { item } = props;
  return (
    <>
      <Card title={item.name} extra={""} style={{ width: "100%" }}>
        <Space direction="vertical">
          <Text>Количество участников: {item.count}</Text>
          <Text>
            Время занятий:
            <Space wrap>
              {item.shedule.map((text) => {
                return (
                  <>
                    <span className="border border-solid border-[#D9D9D9] p-1 text-xs">
                      {text}
                    </span>
                  </>
                );
              })}
            </Space>
          </Text>
          <Text>
            Код приглашения: {item.groupCode}{" "}
            <CopyOutlined
              className="opacity-50 hover:opacity-100"
              onClick={() => navigator.clipboard.writeText(item.groupCode)}
            />
          </Text>
          <Flex>
            <Link to={`/payments`} state={{ group: item }}>
              Платежи
            </Link>
          </Flex>
        </Space>
      </Card>
    </>
  );
};

export default cardGroup;
