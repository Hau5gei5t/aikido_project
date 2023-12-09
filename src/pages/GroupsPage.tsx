import { CopyOutlined } from "@ant-design/icons";
import { Button, Flex, Space, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
type DataType = {
  key: string;
  name: string;
  count: number;
  shedule: string[];
  groupCode: string;
  paymentDate: string;
  note: string;
};
const GroupsPage = () => {
  const MockData = [
    {
      key: "1",
      name: "Группа А",
      count: 10,
      shedule: ["ПН: 10:00 - 12:00 ", "ВТ: 10:00 - 12:00"],
      paymentDate: "10.10.2022",
      groupCode: "asdjh1",
      note: "text",
    },
    {
      key: "2",
      name: "Group 2",
      count: 20,
      shedule: ["СР: 10:00 - 12:00 ", "ЧТ: 10:00 - 12:00"],
      paymentDate: "10.10.2022",
      groupCode: "asdjh2",
      note: "text",
    },
    {
      key: "3",
      name: "Group 3",
      count: 30,
      shedule: ["ПТ: 10:00 - 12:00 ", "СБ: 10:00 - 12:00"],
      paymentDate: "10.10.2022",
      groupCode: "asdjh3",
      note: "text",
    },
  ];
  const column = [
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text: string, record) => (
        <>
          <div className="">
            <Link
              to={`/group/${record.key}`}
              state={{ group: record, type: `Группа` }}
            >
              {text}
            </Link>
          </div>
        </>
      ),
    },
    {
      title: "Количество участников",
      dataIndex: "count",
      key: "count",
      width: 100,
      align: "center",
    },
    {
      title: "Время занятий",
      dataIndex: "shedule",
      key: "shedule",
      align: "center",
    },
    {
      title: "Код",
      dataIndex: "groupCode",
      key: "groupCode",
      align: "center",
      render: (text: string, record) => {
        return (
          <>
            <Flex gap={10} align="center" justify="center">
              {text}
              <CopyOutlined
                className="opacity-50 hover:opacity-100"
                onClick={() => navigator.clipboard.writeText(text)}
              />
            </Flex>
          </>
        );
      },
    },
    {
      title: "Расчетный день",
      dataIndex: "paymentDate",
      key: "paymentDate",
      align: "center",
    },
    {
      title: "Действия",
      key: "actions",
      align: "center",
      render: (_, record) => {
        return (
          <>
            <Space direction="vertical">
              {/* <Link to={`/group/${record.key}/edit`}>Редактировать</Link> */}
              <Link to={`#`}>Редактировать</Link>
              <Link to={`/payments`} state={{ group: record }}>Вкладка: Платежи</Link>
            </Space>
          </>
        );
      },
    },
    {
      title: "Заметки",
      dataIndex: "note",
      key: "note",
      align: "center",
    },
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
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      columns={column}
      dataSource={MockData}
    />
  );
};

export default GroupsPage;
