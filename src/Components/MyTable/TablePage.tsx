import { Table } from "antd";
import "moment/locale/fr";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAgentsData } from "../../actions/agentsDataActions";
import { columns } from "./Columns";

const TablePage = ({ dispatch, loading, agentsData, hasErrors }: any) => {
  useEffect(() => {
    dispatch(fetchAgentsData());
  }, [dispatch]);

  const table = () => {
    if (loading) return <p>Loading</p>;
    if (hasErrors) return <p>Has Errors</p>;
    return (
      <Table
        columns={columns}
        dataSource={agentsData}
        pagination={{ pageSize: 3 }}
      />
    );
  };
  return <section>{table()}</section>;
};

const mapStateToProps = (state: any) => ({
  loading: state.agentsData.loading,
  agentsData: state.agentsData.agentsData,
  hasErrors: state.agentsData.hasErrors,
});
// Connect Redux to React
export default connect(mapStateToProps)(TablePage);
