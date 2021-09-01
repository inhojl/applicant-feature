import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { updateApplicant } from '../../redux/actions/applicants'
import uniqid from 'uniqid';
import './ApplicantForm.scss';

const ApplicantForm = ({ type, formData={} }) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [ input, setInput ] = useState({
    id: formData.id || null,
    firstName: formData.firstName || '',
    lastName: formData.lastName || '',
    occupation: formData.occupation || '',
    ssn: formData.ssn || ''
  });
  const { firstName, lastName, occupation, ssn } = input;
  
  const onChange = (event) => {
    setInput(prevInput => ({
      ...prevInput, 
      [event.target.name]: event.target.value }
    ))
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Sanitize and validate input here

    // if valid move on
    if (type === 'new') {
      await dispatch(updateApplicant({
        ...input,
        id: uniqid()
      }))

    } else if (type === 'edit') {
      await dispatch(updateApplicant(input));
    }
    
    history.push('/applicants')
  }
  
  return (
    <form className='applicant-form' onSubmit={onSubmit}>
      <label for='firstName'>
        First Name
      </label>
        <input 
          type='text' 
          name='firstName' 
          placeholder='First Name'
          value={firstName} 
          onChange={onChange} 
        />
      <label for='lastName'>
        Last Name
      </label>
      <input 
        type='text' 
        name='lastName' 
        placeholder='Last Name'
        value={lastName} 
        onChange={onChange} 
      />
      <label for='occupation'>
        Occupation
      </label>
      <input 
        type='text' 
        name='occupation' 
        placeholder='Occupation'
        value={occupation} 
        onChange={onChange} 
      />
      <label for='ssn'>
        SSN
      </label>
      <input 
        type='text' 
        name='ssn' 
        placeholder='Social Security Number'
        value={ssn} 
        onChange={onChange} 
      />
      <button type='submit'>{ type === 'new' ? 'Create' : 'Update' }</button>
    </form>
  );
}

export default ApplicantForm;
