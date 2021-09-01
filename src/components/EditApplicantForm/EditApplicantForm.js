import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ApplicantForm from '../ApplicantForm/ApplicantForm';

const EditApplicantForm = () => {

  const { id } = useParams();
  const formData = useSelector(state => state.applicants.data[id])

  return (
    <ApplicantForm type='edit' formData={formData} />
  );
}

export default EditApplicantForm;
