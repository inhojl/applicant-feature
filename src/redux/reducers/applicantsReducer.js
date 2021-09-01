
const INITIAL_STATE = {
  loaded: false,
  data: {}
}

export default function applicantsReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case 'RECEIVE_APPLICANTS': return receiveApplicants(state, action.applicants);
    case 'RECEIVE_APPLICANT': return receiveApplicant(state, action.applicant);
    case 'REMOVE_APPLICANT': return removeApplicant(state, action.id);
    default: return state;
  }

}

function receiveApplicants(prevState, applicants) {
  const newData = {}
  applicants.forEach(applicant => {
    newData[applicant.id] = {
      ...prevState[applicant.id],
      ...applicant
    }
  })
  return {
    ...prevState,
    data: newData,
    loaded: true
  };
}

function receiveApplicant(prevState, applicant) {
  const newData = { ...prevState.data };
  newData[applicant.id] = applicant;

  return {
    ...prevState,
    data: newData
  }
}

function removeApplicant(prevState, id) {
  const newData = { ...prevState.data };
  delete newData[id];

  return {
    ...prevState,
    data: newData
  }
}