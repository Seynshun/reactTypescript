import * as React from "react";
import { Table } from "antd";
import data from "../../Data/AgentsData.json";
import { columns } from "./Columns";

const MyTable: React.FunctionComponent = () => {
  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
  );
};

export default MyTable;
