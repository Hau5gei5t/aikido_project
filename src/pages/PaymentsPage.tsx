import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Flex, Progress, Space, Table, Typography } from "antd";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import CardPayment from "../components/cardPayment";

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

const PaymentsPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })
    const location = useLocation()
    const [data, setData] = React.useState<DataType[]>([
      {
        key: "1",
        name: "Group 1",
        count: 10,
        shedule: ["ПН: 10:00 - 12:00 ", "ВТ: 10:00 - 12:00"],
        paymentDate: "10.10.2022",
        price: 500,
        students: [
          {
            key: "1",
            groupKey: "1",
            name: "Максим Зиновьев",
            paymentstatus: "Оплачено",
            paymentDate: "10.10.2022",
            price: 500,
          },
          {
            key: "2",
            groupKey: "1",
            name: "Артём Бусов",
            paymentstatus: "Не оплачено",
            paymentDate: "10.10.2022",
            price: 500,
          },
          {
            key: "3",
            groupKey: "1",
            name: "Галина Елисеева",
            paymentstatus: "Не оплачено",
            paymentDate: "10.10.2022",
            price: 500,
          },
        ],
      },
      {
        key: "2",
        name: "Group 2",
        count: 20,
        shedule: ["СР: 10:00 - 12:00 ", "ЧТ: 10:00 - 12:00"],
        paymentDate: "10.10.2022",
        price: 600,
        students: [
          {
            key: "1",
            groupKey: "2",
            name: "Student 1",
            paymentstatus: "Оплачено",
            paymentDate: "10.10.2022",
            price: 500,
          },
          {
            key: "2",
            groupKey: "2",
            name: "Student 2",
            paymentstatus: "Не оплачено",
            paymentDate: "10.10.2022",
            price: 500,
          },
          {
            key: "3",
            groupKey: "2",
            name: "Student 3",
            paymentstatus: "В обработке",
            paymentDate: "10.10.2022",
            price: 500,
          },
        ],
      },
      {
        key: "3",
        name: "Group 3",
        count: 30,
        shedule: ["ПТ: 10:00 - 12:00 ", "СБ: 10:00 - 12:00"],
        paymentDate: "10.10.2022",
        price: 700,
        students: [
          {
            key: "1",
            groupKey: "3",
            name: "Student 1",
            paymentstatus: "Оплачено",
            paymentDate: "10.10.2022",
            price: 500,
          },
          {
            key: "2",
            groupKey: "3",
            name: "Student 2",
            paymentstatus: "Оплачено",
            paymentDate: "10.10.2022",
            price: 500,
          },
          {
            key: "3",
            groupKey: "3",
            name: "Student 3",
            paymentstatus: "Оплачено",
            paymentDate: "10.10.2022",
            price: 500,
          },
        ],
      },
    ]);
  const { Text } = Typography;

//   setData(MockData)
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
      title: "Расчетный день",
      dataIndex: "paymentDate",
      key: "paymentDate",
      align: "center",
    },
    {
      title: "Оплата в месяц",
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (text) => <span>{text} ₽</span>,
    },
    {
      title: "Процент оплативших",
      key: "percent",
      align: "center",
      render: (_, record) => {
        const percent = Math.round(
          (record.students.filter(
            (student) => student.paymentstatus === "Оплачено"
          ).length /
            record.students.length) *
            100
        );

        return <Progress percent={percent} />;
      },
    },
    {
      title: "Действия",
      key: "actions",
      align: "center",
      render: (_, record) => {
        return (
          <>
            <Space direction="vertical">
              {/* <Link to={`/paymentGroup/${record.key}`}>История платежей</Link> */}
              <Link to={`#`}>История платежей</Link>
              {/* <Link to={`/group/${record.key}/edit`}>Редактировать</Link> */}
              <Link to={`#`}>Редактировать</Link>
            </Space>
          </>
        );
      },
    },
  ];
  const nestedColumn = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text:string,record)=>(
        <Link to={`/profile/${record.key}`}>{text}</Link>
      )
    },
    {
      title: "Статус оплаты",
      dataIndex: "paymentstatus",
      key: "paymentstatus",
      align: "center",
      render: (text) => {
        if (text === "Оплачено") {
          return (
            <Text type="success">
              Оплачено <CheckCircleOutlined />
            </Text>
          );
        } else if (text === "Не оплачено") {
          return (
            <Text type="danger">
              Не оплачено <CloseCircleOutlined />
            </Text>
          );
        } else if (text === "В обработке") {
          return (
            <Text type="warning">
              В обработке <ClockCircleOutlined />
            </Text>
          );
        }
      },
    },
    {
      title: "Дата оплаты",
      dataIndex: "paymentDate",
      key: "paymentDate",
      align: "center",
    },
    {
      title: "Оплата",
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (text) => <span>{text} ₽</span>,
    },
    {
      title: "Действия",
      key: "actions",
      align: "center",
      render: (_, record) => {
        const disabled =
          record.paymentstatus === "Оплачено" ||
          record.paymentstatus === "В обработке";
        return (
          
          
            <Space direction="vertical">
              <Link to={`/payment/${record.key}`}>История платежей</Link>
              <Text
                className="cursor-pointer text-[#1677ff] hover:opacity-70 "
                style={{pointerEvents: disabled ? "none" : "auto"}}
                onClick={() => {
                    console.log(record);
                    setData(data.map((item) => {
                      if (item.key === record.groupKey) {
                        item.students = item.students.map((student) => {
                          if (student.key === record.key) {
                            student.paymentstatus = "Оплачено";
                          }
                          return student;
                        });
                      }
                      return item;
                    }));
                  console.log(record);
                }}
                disabled={disabled}
              >
                Зафиксировать оплату
              </Text>
            </Space>
          
        );
      },
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
    <>
      {isMobile ? (
        <>
          <Space direction="vertical" size={25} className="w-full">
            {data.map((group) => (
              <CardPayment item={group} key={group.key} />
            ))}
          </Space>
        </>
      ) : (
        <>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={column}
            expandable={{
              defaultExpandedRowKeys: [
                location.state.group ? location.state.group.key : 0,
              ],
              expandedRowRender: (record) => (
                <Table
                  columns={nestedColumn}
                  dataSource={record.students}
                  pagination={false}
                  rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                  }}
                />
              ),
            }}
            dataSource={data}
          />
        </>
      )}
    </>
  );
};

export default PaymentsPage;
