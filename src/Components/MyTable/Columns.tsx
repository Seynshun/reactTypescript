import { AgentType } from "../../Types/Agent";
import { EvaluationsType } from "../../Types/Evaluations";
import { Button } from "antd";
import Tags from "../Tags/Tags";
import moment from "moment";
import "moment/locale/fr";

const formatDate = (recentEvaluations: EvaluationsType) => {
  return recentEvaluations.slice(0, 1).map((entry) => {
    return moment(entry.date).format("DD MMMM YYYY");
  });
};

const createTags = (recentEvaluations: EvaluationsType) => {
  return recentEvaluations.map((entry, index) => {
    return <Tags key={index} score={entry.score} />;
  });
};

export const columns = [
  {
    title: "Agent",
    dataIndex: "agent",
    render: (agent: AgentType) => agent.firstName + " " + agent.lastName,
    key: "agent",
  },
  {
    title: "Nb d'évaluations",
    dataIndex: "evaluationNb",
    key: "evaluationNb",
  },
  {
    title: "Score moyen",
    dataIndex: "averageScore",
    render: (averageScore: number) => averageScore + "%",
    key: "averageScore",
  },
  {
    title: "Dynamique",
    dataIndex: "recentEvaluations",
    render: (recentEvaluations: EvaluationsType) =>
      createTags(recentEvaluations),
  },
  {
    title: "Dernière évaluation",
    dataIndex: "recentEvaluations",
    render: (recentEvaluations: EvaluationsType) =>
      formatDate(recentEvaluations),
  },
  {
    render: () => <Button type="primary">Voir</Button>,
  },
];
