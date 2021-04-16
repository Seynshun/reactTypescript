import { AgentDataType, AgentsDataType } from "../../Types/Agent";

export const GET_AGENTSDATA = "GET_AGENTSDATA";
export const GET_AGENTSDATA_SUCCESS = "GET_AGENTSDATA_SUCCESS";
export const GET_AGENTSDATA_FAILURE = "GET_AGENTSDATA_FAILURE";
export const ADD_AGENTSDATA_SUCCESS = "ADD_AGENTSDATA_SUCCESS";

export const getAgentsData = () => ({
  type: GET_AGENTSDATA,
});

export const getAgentsDataSuccess = (agentsData: AgentsDataType) => ({
  type: GET_AGENTSDATA_SUCCESS,
  payload: agentsData,
});

export const getAgentsDataFailure = () => ({
  type: GET_AGENTSDATA_FAILURE,
});

export const addAgents = (agentData: AgentDataType) => ({
  type: ADD_AGENTSDATA_SUCCESS,
  payload: agentData,
});

export function addAgentsData(agentData: AgentDataType) {
  return async (dispatch: any) => {
    dispatch(addAgents(agentData));
  };
}
