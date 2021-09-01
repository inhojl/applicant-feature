import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApplicants, deleteApplicant } from '../../redux/actions/applicants';
import ApplicantDataTable from './ApplicantDataTable/ApplicantDataTable';
import './ApplicantList.scss';

const ApplicantList = () => {

  const dispatch = useDispatch();
  const loaded = useSelector(state => state.applicants.loaded);
  const applicants = useSelector(state => Object.values(state.applicants.data));

  useEffect(() => {
    if (!loaded) {
      dispatch(fetchApplicants());
    }
  }, [])

  const onDeleteRow = (id) => dispatch(deleteApplicant(id));

  return (
    <div className='applicant-list'>
      <ApplicantDataTable data={applicants} onDeleteRow={onDeleteRow} />
    </div>
  );
}

export default ApplicantList;
