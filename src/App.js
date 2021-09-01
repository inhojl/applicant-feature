import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ApplicantList from './components/ApplicantList/ApplicantList';
import NewApplicantForm from './components/NewApplicantForm/NewApplicantForm';
import EditApplicantForm from './components/EditApplicantForm/EditApplicantForm';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/applicants' component={ApplicantList} />
          <Route exact path='/applicants/new' component={NewApplicantForm} />
          <Route exact path='/applicants/:id/edit' component={EditApplicantForm} />
          <Redirect to='/applicants' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
