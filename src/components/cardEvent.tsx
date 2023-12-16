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
        <div>Тип</div>
        <div className="">дата и время</div>
        <div className="">цена</div>
        <div className="text-right "><NavLink to={`#`}>Подробнее</NavLink></div>
      </Space>
    </Card>
  );
};

export default CardEvent;
