import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from '../../Modal/Modal';

import './ApplicantDataTable.scss';

const ApplicantDataTable = ({ data, onDeleteRow }) => {
  const history = useHistory();
  const [ isOpen, setIsOpen ] = useState(false);
  const [ onDelete, setOnDelete ] = useState();

  const onRowClick = (id) => () => history.push(`/applicants/${id}/edit`);
  
  const onOpenModal = (id) => {
    return (event) => {
      event.stopPropagation();
      setOnDelete(() => () => onDeleteRow(id));
      setIsOpen(true);
    }
  }

  return (
    <>
      <div className='applicant-dt-wrapper'>
        <table className='applicant-dt'>
          <thead>
            <tr className='applicant-dt__header'>
              <th className='applicant-dt__header-col'>First Name</th>
              <th className='applicant-dt__header-col'>Last Name</th>
              <th className='applicant-dt__header-col'>Occupation</th>
              <th className='applicant-dt__header-col'>SSN</th>
              <th className='applicant-dt__header-col'>
                <button className='applicant-dt__add-button'>
                  <Link to='applicants/new'><FontAwesomeIcon icon={faPlus} /></Link>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,i) => (
                <tr className='applicant-dt__data-row' key={i} onClick={onRowClick(item.id)}>
                  <td className='applicant-dt__data-col'>{item.firstName}</td>
                  <td className='applicant-dt__data-col'>{item.lastName}</td>
                  <td className='applicant-dt__data-col'>{item.occupation}</td>
                  <td className='applicant-dt__data-col'>{item.ssn}</td>
                  <td className='applicant-dt__data-col'><button className='applicant-dt__delete-button' onClick={onOpenModal(item.id)}><FontAwesomeIcon icon={faTimesCircle} /></button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Modal isOpen={isOpen} onDelete={onDelete} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default ApplicantDataTable;
