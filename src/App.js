import { Route, Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import React from 'react';
import Header from './Main/Header';
import Navigation from './Main/Navigation';

import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Websites from './pages/Websites';

import All from './pages/tasks/categories/All'
import Home from './pages/tasks/categories/Home'
import Misc from './pages/tasks/categories/Misc'
import School from './pages/tasks/categories/School'
import Social from './pages/tasks/categories/Social'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [websites, setWebsites] = useState([])
  const [accounts, setAccounts] = useState([])
  const [sortedTasks, setSortedTasks] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [sortedWebsites, setSortedWebsites] = useState([])

  useEffect(() => {
    fetch("./../../../mockData.json")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.userdata[0].task)
        setWebsites(data.userdata[0].website)
        setAccounts(data.userdata[0].account)
      })
  }, [])

  const sortByDeadlineDate = (a, b) => {
    if (!a.deadlineDate) return 1;
    if (!b.deadlineDate) return -1;
    const deadlineA = new Date(a.deadlineDate + " " + (a.deadlineTime || "23:59:59"));
    const deadlineB = new Date(b.deadlineDate + " " + (b.deadlineTime || "23:59:59"));
    if (deadlineA.toDateString() === deadlineB.toDateString()) {
      return new Date("1970/01/01 " + (a.deadlineTime || "23:59:59")) - new Date("1970/01/01 " + (b.deadlineTime || "23:59:59"));
    }
    return deadlineA - deadlineB;
  };

  const sortByClicks = (a, b) => {
    return b.clicks - a.clicks;
  }

  useEffect(() => {
    setSortedTasks([...tasks].sort(sortByDeadlineDate));
  }, [tasks]);

  useEffect(()=>{
    setSortedWebsites([...websites].sort(sortByClicks));
  }, [websites]);

  function doneFunc(name, deadlineDate) {
    const index = tasks.findIndex(task => task.name === name && task.deadlineDate === deadlineDate);
    setTasks((prevSortedTasks) => {
      const updatedTasks = [...prevSortedTasks];
      if (updatedTasks[index].state !== "done") {
        updatedTasks[index].state = "done";
      } else {
        updatedTasks[index].state = "in progress";
      }
      return updatedTasks;
    });
  }

  const handleOutsideClick = () => {
    setShowMenu(!showMenu)
  };

  const deleteTask = (name, deadlineDate) => {
    const index = tasks.findIndex(task => task.name === name && task.deadlineDate === deadlineDate);
    setTasks(tasks.filter(task => task !== tasks[index]));
  }

  const deleteWebsite = (name) => {
    const index = websites.findIndex(website => website.name === name);
    setWebsites(websites.filter(website => website !== websites[index]));
  }

  return (
    <main onClick={() => handleOutsideClick()}>
      <Header />
      <Navigation account={accounts} />
      <Routes>
        <Route path="/Dashboard" element={<Dashboard tasks={sortedTasks} donefunc={doneFunc} setTasks={setTasks} websites={sortedWebsites} setWebsites={setWebsites}/>}>
          <Route path="/Dashboard/All" element={<All tasks={sortedTasks} donefunc={doneFunc} handleOutsideClick={handleOutsideClick} showMenu={showMenu} deleteTask={deleteTask} setTasks={setTasks}/>} />
          <Route path="/Dashboard/School" element={<School tasks={sortedTasks} donefunc={doneFunc} handleOutsideClick={handleOutsideClick} showMenu={showMenu} deleteTask={deleteTask} setTasks={setTasks}/>} />
          <Route path="/Dashboard/Social" element={<Social tasks={sortedTasks} donefunc={doneFunc} handleOutsideClick={handleOutsideClick} showMenu={showMenu} deleteTask={deleteTask} setTasks={setTasks}/>} />
          <Route path="/Dashboard/Home" element={<Home tasks={sortedTasks} donefunc={doneFunc} handleOutsideClick={handleOutsideClick} showMenu={showMenu} deleteTask={deleteTask} setTasks={setTasks}/>} />
          <Route path="/Dashboard/Misc" element={<Misc tasks={sortedTasks} donefunc={doneFunc} handleOutsideClick={handleOutsideClick} showMenu={showMenu} deleteTask={deleteTask} setTasks={setTasks}/>} />
          <Route path="/Dashboard" exact element={<Navigate to="/Dashboard/All" />} />
        </Route>
        <Route path="/Tasks" element={<Tasks tasks={sortedTasks} donefunc={doneFunc} setTasks={setTasks} deleteTask={deleteTask} showMenu={showMenu} setShowMenu={setShowMenu} handleOutsideClick={handleOutsideClick} />}>
          <Route path="/Tasks/All" element={<All tasks={sortedTasks} donefunc={doneFunc} handleOutsideClick={handleOutsideClick} showMenu={showMenu} deleteTask={deleteTask} setTasks={setTasks}/>} />
          <Route path="/Tasks/School" element={<School tasks={sortedTasks} donefunc={doneFunc} handleOutsideClick={handleOutsideClick} showMenu={showMenu} deleteTask={deleteTask} setTasks={setTasks}/>} />
          <Route path="/Tasks/Social" element={<Social tasks={sortedTasks} donefunc={doneFunc} handleOutsideClick={handleOutsideClick} showMenu={showMenu} deleteTask={deleteTask} setTasks={setTasks}/>} />
          <Route path="/Tasks/Home" element={<Home tasks={sortedTasks} donefunc={doneFunc} handleOutsideClick={handleOutsideClick} showMenu={showMenu} deleteTask={deleteTask} setTasks={setTasks}/>} />
          <Route path="/Tasks/Misc" element={<Misc tasks={sortedTasks} donefunc={doneFunc} handleOutsideClick={handleOutsideClick} showMenu={showMenu} deleteTask={deleteTask} setTasks={setTasks}/>} />
          <Route path="/Tasks" exact element={<Navigate to="/Tasks/All" />} />
        </Route>
        <Route path="/Websites" element={<Websites websites={sortedWebsites} setWebsites={setWebsites} deleteWebsite={deleteWebsite} handleOutsideClick={handleOutsideClick} showMenu={showMenu} />} />
        <Route path="/" exact element={<Navigate to="/Dashboard/All" />} />
      </Routes>
    </main>
  )
}