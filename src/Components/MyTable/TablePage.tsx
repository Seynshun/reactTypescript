import { Table } from "antd";
import "moment/locale/fr";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAgentsData } from "../../redux/actions/agentsDataActions";
import { RootState } from "../../redux/reducers";
import { columns } from "./Columns";

type TablePageProps = {
  path: string;
};

const TablePage: React.FunctionComponent<TablePageProps> = ({
  loading,
  hasErrors,
}: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAgentsData());
  }, []);

  const agents = useSelector((state: RootState) => state.agentsData.agentsData);

  const table = () => {
    if (loading) return <p>Loading</p>;
    if (hasErrors) return <p>Has Errors</p>;
    return (
      <Table
        columns={columns}
        dataSource={agents}
        pagination={{ pageSize: 3 }}
      />
    );
  };
  return <section>{table()}</section>;
};

export default TablePage;
