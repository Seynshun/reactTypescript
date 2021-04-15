import { EvaluationsType } from "./Evaluations"

export type AgentType = {
  firstName: string;
  lastName: string;
}

export type AgentDataType = {
    id : number,
    agent : AgentType,
    evaluationNb : number,
    averageScore : number,
    recentEvaluations : EvaluationsType
}

export type AgentsDataType = AgentDataType[]