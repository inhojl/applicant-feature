import { getMockApplicants } from '../../api/mock';

function receiveApplicants(applicants) {
  return {
    type: 'RECEIVE_APPLICANTS',
    applicants
  }
}

function receiveApplicant(applicant) {
  return {
    type: 'RECEIVE_APPLICANT',
    applicant
  }
}

function removeApplicant(id) {
  return {
    type: 'REMOVE_APPLICANT',
    id
  }
}


export const fetchApplicants = () => async (dispatch) => {
  const { count, data } = await getMockApplicants();
  return dispatch(receiveApplicants(data));
}

export const createApplicant = (applicant) => async dispatch => {

  // should be some async call here to update db

  return dispatch(receiveApplicant(applicant))
}

export const updateApplicant = (applicant) => async dispatch => {

  // should be some async call here to update db
  
  return dispatch(receiveApplicant(applicant))
}

export const deleteApplicant = (id) => async dispatch => {

  // should be some async call here to update db

  return dispatch(removeApplicant(id));
}