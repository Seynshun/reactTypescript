export const GET_AGENTSDATA = "GET_AGENTSDATA";
export const GET_AGENTSDATA_SUCCESS = "GET_AGENTSDATA_SUCCESS";
export const GET_AGENTSDATA_FAILURE = "GET_AGENTSDATA_FAILURE";

export const getAgentsData = () => ({
  type: GET_AGENTSDATA,
});

export const getAgentsDataSuccess = (agentsData: any) => ({
  type: GET_AGENTSDATA_SUCCESS,
  payload: agentsData,
});

export const getAgentsDataFailure = () => ({
  type: GET_AGENTSDATA_FAILURE,
});

export function fetchAgentsData() {
  return async (dispatch: any) => {
    dispatch(getAgentsData());
    try {
      const response = await fetch("AgentsData.json");
      const data = await response.json();

      dispatch(getAgentsDataSuccess(data));
    } catch (error) {
      dispatch(getAgentsDataFailure());
    }
  };
}
