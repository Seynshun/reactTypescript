import { Table, Button } from "antd";
import moment from "moment";
import "moment/locale/fr";
import { AgentType } from "../../Types/AgentType";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAgentsData } from "../../actions/agentsDataActions";
import { EvaluationsType } from "../../Types/EvaluationsType";
import Tags from "../Tags/Tags";

const TablePage = ({ dispatch, loading, agentsData, hasErrors }: any) => {
  useEffect(() => {
    dispatch(fetchAgentsData());
  }, [dispatch]);

  const columns = [
    {
      title: "Agent",
      render: (record: { agent: AgentType }) =>
        record.agent.firstName + " " + record.agent.lastName,
      key: "agent",
    },
    {
      title: "Nb d'évaluations",
      dataIndex: "evaluationNb",
      key: "evaluationNb",
    },
    {
      title: "Score moyen",
      render: (record: { averageScore: number }) => record.averageScore + "%",
      key: "averageScore",
    },
    {
      title: "Dynamique",
      render: (record: { recentEvaluations: EvaluationsType }) =>
        record.recentEvaluations.map((entry, index) => {
          return <Tags key={index} score={entry.score} />;
        }),
    },
    {
      title: "Dernière évaluation",
      render: (record: { recentEvaluations: EvaluationsType }) =>
        record.recentEvaluations.slice(0, 1).map((entry, index) => {
          let date: string = moment(entry.date).format("D MMMM YYYY");
          return date;
        }),
    },
    {
      render: () => <Button type="primary">Voir</Button>,
    },
  ];

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
