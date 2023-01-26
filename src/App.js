import { Route, Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import React from 'react';
import Header from './Main/Header';
import Navigation from './Main/Navigation';

import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Websites from './pages/Websites';
import Something from './pages/Something';

import All from './pages/tasks/categories/All'
import Home from './pages/tasks/categories/Home'
import Misc from './pages/tasks/categories/Misc'
import School from './pages/tasks/categories/School'
import Social from './pages/tasks/categories/Social'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [websites, setWebsites] = useState([])
  const [clicks, setClicks] = useState([])
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    fetch("./../../../mockData.json")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.userdata[0].task)
        setWebsites(data.website)
        setClicks(data.userdata[0].clicks)
        setAccounts(data.userdata[0].account)
      })
  }, [])

  return (
    <>
      <Header />
      <Navigation account={accounts} />
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="/Dashboard/All" element={<All tasks={tasks} />} />
          <Route path="/Dashboard/School" element={<School tasks={tasks} />} />
          <Route path="/Dashboard/Social" element={<Social tasks={tasks} />} />
          <Route path="/Dashboard/Home" element={<Home tasks={tasks} />} />
          <Route path="/Dashboard/Misc" element={<Misc tasks={tasks} />} />
          <Route path="/Dashboard" exact element={<Navigate to="/Dashboard/All" />} />
        </Route>
        <Route path="/Tasks" element={<Tasks />}>
          <Route path="/Tasks/All" element={<All tasks={tasks} />} />
          <Route path="/Tasks/School" element={<School tasks={tasks} />} />
          <Route path="/Tasks/Social" element={<Social tasks={tasks} />} />
          <Route path="/Tasks/Home" element={<Home tasks={tasks} />} />
          <Route path="/Tasks/Misc" element={<Misc tasks={tasks} />} />
          <Route path="/Tasks" exact element={<Navigate to="/Tasks/All" />} />
        </Route>
        <Route path="/Websites" element={<Websites />} />
        <Route path="/Something" element={<Something />} />
        <Route path="/" exact element={<Navigate to="/Dashboard/All" />} />
      </Routes>
    </>
  )
}
