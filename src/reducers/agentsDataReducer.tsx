import * as actions from "../actions/agentsDataActions";

export const initialState = {
  agentsData: [],
  loading: false,
  hasErrors: false,
};

export default function agentsDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.GET_AGENTSDATA:
      return { ...state, loading: true };
    case actions.GET_AGENTSDATA_SUCCESS:
      return { agentsData: action.payload, loading: false, hasErrors: false };
    case actions.GET_AGENTSDATA_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
