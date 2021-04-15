import * as actions from "../actions/agentsDataActions";
import produce from "immer";

export const initialState = {
  agentsData: [],
  loading: false,
  hasErrors: false,
};

export default function agentsDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.GET_AGENTSDATA:
      return produce(initialState, (draft) => {
        draft.loading = true;
      });
    case actions.GET_AGENTSDATA_SUCCESS:
      return produce(initialState, (draft) => {
        draft.agentsData = action.payload;
        draft.loading = false;
        draft.hasErrors = false;
      });
    case actions.GET_AGENTSDATA_FAILURE:
      return produce(initialState, (draft) => {
        draft.agentsData = [];
        draft.hasErrors = true;
      });

    case actions.ADD_AGENTSDATA_SUCCESS:
      return produce(state, (draft: any) => {
        draft.agentsData.push(action.payload);
      });
    default:
      return state;
  }
}
