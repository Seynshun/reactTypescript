import { AgentType } from "./Agent";
import { EvaluationsType } from "./Evaluations";

export type AgentDataType = {
    id : number,
    agent : AgentType,
    evaluationNb : number,
    averageScore : number,
    recentEvaluatons : EvaluationsType
}

export type AgentsDataType = AgentDataType[]