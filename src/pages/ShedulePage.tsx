import React from "react";
import dayjs from "dayjs";
import type { BadgeProps, CalendarProps } from "antd";
import { Badge, Calendar, Card, Flex, Space } from "antd";
import locale from "antd/lib/calendar/locale/ru_RU";
import ru from "dayjs/locale/ru";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobileCalendar from "../components/mobileCalendar";
dayjs.locale(ru);

const getListData = (value: dayjs.Dayjs) => {

  let listData;
  switch (value.date()) {
    case 11:
      listData = [
        { group: "group 1", time: "10:00", adress: "adress adress adress" },
        { group: "group 2", time: "11:00", adress: "adress 2" },
      ];
      break;

    default:
  }
  return listData || [];
};

const getMonthData = (value: dayjs.Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const ShedulePage: React.FC = () => {
      const isMobile = useMediaQuery({
      query: "(max-width: 767px)",
    });
  const dateCellRender = (value: dayjs.Dayjs) => {
    const listData = getListData(value);
    return (
      <Flex vertical>
        {listData.map((item) => (
          <div
            className="max-h-12 p-1"
            style={{ border: "1px solid #F0F0F0" }}
            key={item.group}
          >
            <div className="m-1">
              <Flex justify="space-between">
                <span className="font-roboto font-normal text-xs ">
                  {item.group}
                </span>
                <span className="font-roboto text-[#1890FF] text-[10px]">
                  {item.time}
                </span>
              </Flex>
              <span className="font-roboto text-[10px] opacity-70">
                {item.adress}
              </span>
            </div>
          </div>
        ))}
      </Flex>
    );
  };

  const cellRender: CalendarProps<dayjs.Dayjs>["cellRender"] = (
    current,
    info
  ) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };

  return (
    <>
      {isMobile ? (
        <><MobileCalendar/></>
      ) : (
        <>
          <Calendar cellRender={cellRender} locale={locale} />
        </>
      )}
    </>
  );
};

export default ShedulePage;
