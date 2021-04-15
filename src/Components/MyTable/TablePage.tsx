import { Table } from "antd";
import "moment/locale/fr";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAgentsData,
  fetchAgentsData,
} from "../../redux/actions/agentsDataActions";
import { RootState } from "../../redux/reducers";
import { columns } from "./Columns";
import CreateAgent from "../CreateAgent/CreateAgent";

type TablePageProps = {
  path: string;
};

const TablePage: React.FunctionComponent<TablePageProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAgentsData());
  }, [dispatch]);

  const handleAgentCreation = useCallback(
    (agent) => {
      console.log("Success" + JSON.stringify(agent));
      dispatch(addAgentsData(agent));
    },
    [dispatch]
  );

  const agents: any = useSelector(
    (state: RootState) => state.agentsData.agentsData
  );
  const loading: any = useSelector(
    (state: RootState) => state.agentsData.loading
  );
  const hasErrors: any = useSelector(
    (state: RootState) => state.agentsData.hasErrors
  );

  const renderTable = () => {
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
  return (
    <section>
      <CreateAgent formValues={handleAgentCreation} />
      {renderTable()}
    </section>
  );
};

export default TablePage;
