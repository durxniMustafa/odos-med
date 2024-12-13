// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Patients from './components/Patients';
import PatientDetail from './components/PatientDetail';
import Sessions from './components/Sessions';
import SessionDetail from './components/SessionDetail';
import AddPatient from './components/AddPatients';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patients/:id" element={<PatientDetail />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/sessions/:id" element={<SessionDetail />} />
        <Route path="/addpatients" element={<AddPatient />} />

      </Routes>
    </Router>
  );
}

export default App;
