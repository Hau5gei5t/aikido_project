import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as dayjs from "dayjs";
import "dayjs/locale/ru";
import { Checkbox, Table } from "antd";

dayjs.locale("ru");
type DataType = {
  key: string;
  name: string;
};
const getDateWeekday = (weekday: string) => {
  const result = [];
  let date = dayjs();
  date = date.set("date", 1);
  // console.log(date);

  for (let i = 1; i <= date.daysInMonth(); i++) {
    if (date.day() === 1 || date.day() === 2) {
      result.push({
        title: date.format("dd D"),
        key: date.format("D"),
        render: () => (
          <>
            <Checkbox />
          </>
        ),
      });
    }
    date = date.add(1, "day");
  }
  return result;
};

const GroupPage = () => {
  const location = useLocation();
  const group = location.state.group;
  const weekdays = getDateWeekday("");
  const mockData = [
    {
      key: "1",
      firstName: "Максим",
      lastName: "Зиновьев",
    },
    {
      key: "2",
      firstName: "Артём ",
      lastName: "Бусов",
    },
    {
      key: "3",
      firstName: "Галина",
      lastName: "Елисеева",
    },
  ];

  const columns = [
    {
      title: "№",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Имя",
      key: "name",
      render: (text: string, record) => (
        <Link
          to={`/profile/${record.key}`}
          state={{
            type: "Профиль",
            id: record.key,
            firstName: record.firstName,
            lastName: record.lastName,
          }}
        >
          {record.firstName} {record.lastName}
        </Link>
      ),
    },
    ...weekdays,
  ];
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={mockData}
    />
  );
};

export default GroupPage;
