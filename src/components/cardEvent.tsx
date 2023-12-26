import { Card, Checkbox, Space } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

interface CardEventProps {
  type: "event" | "schedule";
  event: any;
}

const CardEvent: React.FC<CardEventProps> = (props) => {
  const { event, type } = props;
  console.log(event);

  if (type === "schedule") {
    return (
      <Card
        size="small"
        title={event.group}
        extra={<a href="#">{event.time}</a>}
      >
        <span className="opacity-50">{event.adress}</span>
      </Card>
    );
  }
  return (
    <Card size="small" title={event.group} extra={<Checkbox></Checkbox>}>
      <Space direction="vertical" className="w-full">
        <div>Тип: Соревнование</div>
        <div className="">дата и время: ПН 10:00 - 12:00</div>
        <div className="">цена: 650 ₽</div>
        <div className="text-right ">
          <NavLink to={`#`}>Подробнее</NavLink>
        </div>
      </Space>
    </Card>
  );
};

export default CardEvent;
