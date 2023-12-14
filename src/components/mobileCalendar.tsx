import { Col, Flex, Row, Space, Typography } from "antd";
import React from "react";
import locale from "antd/lib/calendar/locale/ru_RU";
import dayjs from "dayjs";
import ru from "dayjs/locale/ru";
dayjs.locale(ru);

const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const MobileCalendar: React.FC = () => {
  const { Text } = Typography;
  return (
    <>
      <div className="w-full">
        <Space direction="vertical" className="w-full">
          <Row className="bg-[#E6F7FF]" justify={"space-evenly"}>
            {weekdays.map((day) => (
              <Col
                span={3.5}
                style={{ width: "22px", height: "22px", textAlign: "center" }}
              >
                <Text strong>{day}</Text>
              </Col>
            ))}
          </Row>
          <Row justify={"space-evenly"}>
            {weekdays.map((_, i) => {
              const day = dayjs().weekday(i).format("D");
              if (day === dayjs().date().toString()) {
                return (
                  <>
                    <Col
                      span={3.5}
                      style={{
                        width: "22px",
                        height: "22px",
                        textAlign: "center",
                      }}
                    >
                      <Text className="text-center text-white">
                        <div className="bg-[#1890FF] rounded-full"> {day}</div>
                      </Text>
                    </Col>
                  </>
                );
              }
              return (
                <>
                  <Col
                    span={3.5}
                    style={{
                      width: "22px",
                      height: "22px",
                      textAlign: "center",
                    }}
                  >
                    <Text strong>{day}</Text>
                  </Col>
                </>
              );
            })}
          </Row>
        </Space>
      </div>
    </>
  );
};

export default MobileCalendar;
