import { takeLatest, call, put } from "redux-saga/effects";
import {
  ADD_AGENTSDATA_SUCCESS,
  GET_AGENTSDATA,
  GET_AGENTSDATA_FAILURE,
  GET_AGENTSDATA_SUCCESS,
} from "../actions/agentsDataActions";

export function* watcherAgentsData() {
  yield takeLatest(GET_AGENTSDATA, agentDataSaga);
  yield takeLatest(ADD_AGENTSDATA_SUCCESS, addAgentSaga);
}

export async function fetchAgentsData() {
  const response = await fetch("AgentsData.json");
  return response.json();
}

function* addAgentSaga() {}

function* agentDataSaga() {
  try {
    const agentsData: Promise<any> = yield call(fetchAgentsData);
    yield put({ type: GET_AGENTSDATA_SUCCESS, payload: agentsData });
  } catch (error) {
    yield put({ type: GET_AGENTSDATA_FAILURE, error });
  }
}
