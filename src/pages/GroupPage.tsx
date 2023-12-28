// @ts-nocheck
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as dayjs from "dayjs";
import "dayjs/locale/ru";
import { Checkbox, Table } from "antd";
import { useMediaQuery } from "react-responsive";
import { getGroup } from "../services/Groups/getGroup.service";
import IGroup from "../interfaces/group.interface";

dayjs.locale("ru");
type DataType = {
  key: string;
  name: string;
};
enum WEEKDAYS {
  "Вс",
  "Пн",
  "Вт",
  "Ср",
  "Чт",
  "Пт",
  "Сб",
}
const getDateWeekday = (days: WEEKDAYS[]) => {
  const result = [];
  let date = dayjs();
  date = date.set("date", 1);
  // console.log(date);
  let id = 0;
  for (let i = 1; i <= date.daysInMonth(); i++) {
    days.forEach((day) => {
      if (date.day() === day) {
        result.push({
          title: date.format("dd D"),
          key: date.format("D"),
          render: () => (
            <>
              <Checkbox
                id={`${id++}`}
                onClick={(e) => {
                  console.log(Math.floor(e.target.id / 8),e.target.checked);
                }}
              />
            </>
          ),
        });
      }
    });
    date = date.add(1, "day");
  }
  return result;
};

const GroupPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const location = useLocation();
  const group = location.state.group;

  const [data, setData] = React.useState<IGroup>(group);
  const [attendance, setAttendance] = React.useState<unknown>();
  useEffect(() => {
    getGroup(group.id).then((res) => {
      
      setData(res);
      
    });
  }, []);
  const checkedDays = data.shedule.map((day) => {
    return WEEKDAYS[day.split(":")[0]];
  });
  console.log(checkedDays);
  
  const weekdays = ()=>{
    const result = [];
    let date = dayjs();
    date = date.set("date", 1);
    // console.log(date);
    let id = 0;
    let count = 0
    for (let i = 1; i <= date.daysInMonth(); i++) {
      checkedDays.forEach((day) => {
        if (date.day() === day) {
          count++
          result.push({
            title: date.format("dd D"),
            key: date.format("D"),
            render: () => (
              <>
                <Checkbox
                  id={`${id++}`}
                  onClick={(e) => {
                    console.log(
                      Math.floor(e.target.id / count)+1,
                      e.target.id % count,
                      e.target.checked
                    );
                    
                    
                  }}
                />
              </>
            ),
          });
        }
      });
      date = date.add(1, "day");
    }
    return result;
  };
  const result = isMobile ? weekdays().slice(4, 5) : weekdays();

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
          to={`/profile/${record.userID}`}
          state={{
            type: "Профиль",
            id: record.userID,
            firstName: record.name.split(" ")[1],
            lastName: record.name.split(" ")[0],
          }}
        >
          {record.name}
        </Link>
      ),
    },
    ...result,
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
      dataSource={data.students}
      pagination={false}
    />
  );
};

export default GroupPage;
