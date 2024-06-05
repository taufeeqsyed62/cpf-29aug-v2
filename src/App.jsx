import { React,useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import OTP from './components/OTP';
import UserForm from './components/userform';
import HomePage from './components/HomePage';
import AboutInd from './components/Induction/AboutInd';
import Layout from "../src/layout"
import Start_Induction from './components/Induction/start-Induction';
import Chapter01 from './components/Induction/chapter01';
import Quiz from './components/Induction/Quiz';
import Chapter_Completion from './components/Induction/Chapter_Completion';
import Completion from './components/Induction/Completion';
import Induction_Complete from './components/Induction/Induction_Complete';
import Final_Assignment from './components/Induction/Final_Assignment';
import Clearence from './components/Induction/Clearence';
import Trainer from './components/Induction/Trainer';
import TrainieInfo from './components/Induction/TrainieInfo';
import SessionDetail from './components/Induction/SessionDetail';
import VirtualTrainieInfo from './components/Induction/VirtualTrainerInfo';
import VirtualSessionDetail from './components/Induction/VirtaulSessionDetail';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserForm />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/aboutInd" element={<Layout><AboutInd/></Layout>} />
          <Route path="/start-induction" element={<Layout><Start_Induction/></Layout>} />
          <Route path="/chapter01" element={<Layout><Chapter01/></Layout>} />
          <Route path="/chapter01/quiz" element={<Layout><Quiz/></Layout>} />
          <Route path="/chapter01/completion" element={<Layout><Chapter_Completion/></Layout>} />
          <Route path="/part01/completion" element={<Layout><Completion/></Layout>} />
          <Route path="/induction_complete" element={<Layout><Induction_Complete/></Layout>} />
          <Route path="/assignment" element={<Layout><Final_Assignment/></Layout>} />
          <Route path="/clearence" element={<Layout><Clearence/></Layout>} />
          <Route path="/training" element={<Layout><Trainer/></Layout>} />
          <Route path="/trainie" element={<Layout><TrainieInfo/></Layout>} />
          <Route path="/sessiondetail" element={<Layout><SessionDetail/></Layout>} />
          <Route path="/virtualTrainerInfo" element={<Layout><VirtualTrainieInfo/></Layout>} />
          <Route path="/virtualsessionDetail" element={<Layout><VirtualSessionDetail/></Layout>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
