import * as React from "react";
import { Table, Button } from "antd";
import { Agent } from "../Types/Agents";
import { Evaluations } from "../Types/Evaluations";
import "antd/dist/antd.css";
import data from "../Data/AgentsData.json";
import Tags from "./Tags";

class MyTable extends React.Component {
  columns: any = [
    {
      title: "Agent",
      render: (record: { agent: Agent }) =>
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
      render: (record: { recentEvaluations: [Evaluations] }) =>
        record.recentEvaluations.map((entry, index) => {
          return <Tags key={index} score={entry.score} />;
        }),
    },
    {
      title: "Dernière évaluation",
      render: (record: { recentEvaluations: [Evaluations] }) =>
        record.recentEvaluations.slice(0, 1).map((entry, index) => {
          let date: Date = new Date(entry.date);
          let frenchDate: string = new Intl.DateTimeFormat("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(date);
          return frenchDate;
        }),
    },
    {
      render: () => <Button type="primary">Voir</Button>,
    },
  ];

  render() {
    return (
      <Table
        columns={this.columns}
        dataSource={data}
        pagination={{ pageSize: 3 }}
      />
    );
  }
}

export default MyTable;
