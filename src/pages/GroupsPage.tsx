// @ts-nocheck
import { CopyOutlined } from "@ant-design/icons";
import { Button, Flex, Space, Table } from "antd";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import CardGroup from "../components/cardGroup";
import { getAllGroup } from "../services/Groups/getAllGroups.service";
import getUser from "../services/getUser.service";
import Dayjs from "dayjs";
import { deleteGroup } from "../services/Groups/deleteGroup.service";
type DataType = {
  [key: string]:
    | string
    | string[]
    | Dayjs.Dayjs
    | Dayjs.Dayjs[]
    | undefined
    | number;
  id: number;
  groupName: string;
  groupCode: string;
  description?: string;
  paymentDate: Dayjs.Dayjs;
  price: string;
  locationGroup: string;
  shedule: string[];
};
const GroupsPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [groups, setGroups] = React.useState();
  const [selectedRows, setSelectedRows] = React.useState<DataType[]>([]);
  const MockData = [
    {
      key: "1",
      name: "Группа А",
      count: 10,
      shedule: ["Пн: 10:00 - 12:00 ", "Вт: 10:00 - 12:00 "],
      paymentDate: "10.10.2022",
      groupCode: "asdjh1",
      note: "text",
      price: 500,
      location: "test",
    },
    {
      key: "2",
      name: "Group 2",
      count: 20,
      shedule: ["Ср: 10:00 - 12:00 ", "Чт: 10:00 - 12:00 "],
      paymentDate: "10.10.2022",
      groupCode: "asdjh2",
      note: "text",
      price: 500,
      location: "test",
    },
    {
      key: "3",
      name: "Group 3",
      count: 30,
      shedule: ["Пт: 10:00 - 12:00 ", "Сб: 10:00 - 12:00 "],
      paymentDate: "10.10.2022",
      groupCode: "asdjh3",
      note: "text",
      price: 500,
      location: "test",
    },
  ];
  useEffect(() => {
    const role = getUser(JSON.parse(localStorage.getItem("user")!).id).then(
      (res) => {
        const data = getAllGroup(
          JSON.parse(localStorage.getItem("user")!).id,
          res.role,
          res.groupCode
        );
        data.then((res) => {
          setGroups(res);
        });
      }
    );
  }, []);

  const column = [
    {
      title: "Название",
      dataIndex: "groupName",
      key: "groupName",
      align: "center",
      render: (text: string, record) => (
        <>
          <div className="">
            <Link
              to={`/group/${record.id}`}
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
      render: (_, record) => {
        return <>{record.students.length}</>;
      },
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
              <Link
                to={`/group/${record.id}/edit`}
                state={{ group: record, type: `Редактирование группы` }}
              >
                Редактировать
              </Link>
              {/* <Link to={`#`}>Редактировать</Link> */}
              <Link to={`/payments`} state={{ group: record, type: `Платежи` }}>
                Вкладка: Платежи
              </Link>
            </Space>
          </>
        );
      },
    },
    {
      title: "Заметки",
      dataIndex: "description",
      key: "description",
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
      const res = selectedRows;
      setSelectedRows(res);
    },
  };
  return (
    <>
      {isMobile ? (
        <>
          <Space direction="vertical" size={20} style={{ width: "100%" }}>
            {groups? groups.map((item) => (
              <CardGroup key={item.id} item={item} />
            )): null}
          </Space>
        </>
      ) : (
        <>
          {localStorage.getItem("role") !== "student" ? (
            <>
              <Link
                to={`/group/new`}
                state={{ type: `Создание группы` }}
                className="float-right mb-3"
              >
                <Button type="primary">Создать группу</Button>
              </Link>
              <Button
                onClick={() => {
                  selectedRows.forEach((item) => {
                    deleteGroup(item.id.toString());
                    const newData = groups.filter(
                      (group) => group.id !== item.id
                    );
                    setSelectedRows([])
                    setGroups(newData);
                  });
                }}
                type="primary"
                danger
                disabled={selectedRows.length <= 0}
              >
                Удалить выбранные группы
              </Button>
            </>
          ) : (
            <></>
          )}

          <Table
            columns={column}
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            rowKey={(record) => record.id}
            dataSource={groups}
          />
        </>
      )}
    </>
  );
};

export default GroupsPage;
