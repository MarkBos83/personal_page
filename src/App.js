import { Route, Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";

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

class App extends React.Component {
  state = {
    tasks: [
    ],
    websites: [

    ],
    clicks: [

    ],
    accounts: [

    ]
}

componentDidMount(){
    fetch("./../../../mockData.json")
    .then((response) => response.json())
    .then((data) => {
        this.setState({tasks: data.userdata[0].task})
        this.setState({websites: data.website})
        this.setState({clicks: data.userdata[0].clicks})
        this.setState({accounts: data.userdata[0].account})
    })  
    .catch((error) => {
        console.error(error)
    })
}

  render() {
    return (
      <>
        <Header />
        <Navigation account={this.state.accounts}/>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="/Dashboard/All" element={<All tasks={this.state.tasks} />} />
            <Route path="/Dashboard/School" element={<School tasks={this.state.tasks} />} />
            <Route path="/Dashboard/Social" element={<Social tasks={this.state.tasks} />} />
            <Route path="/Dashboard/Home" element={<Home tasks={this.state.tasks} />} />
            <Route path="/Dashboard/Misc" element={<Misc tasks={this.state.tasks} />} />
            <Route path="/Dashboard" exact element={<Navigate to="/Dashboard/All" />} />
          </Route>
          <Route path="/Tasks" element={<Tasks />}>
            <Route path="/Tasks/All" element={<All tasks={this.state.tasks} />} />
            <Route path="/Tasks/School" element={<School tasks={this.state.tasks} />} />
            <Route path="/Tasks/Social" element={<Social tasks={this.state.tasks} />} />
            <Route path="/Tasks/Home" element={<Home tasks={this.state.tasks} />} />
            <Route path="/Tasks/Misc" element={<Misc tasks={this.state.tasks} />} />
            <Route path="/Tasks" exact element={<Navigate to="/Tasks/All" />} />
          </Route>
          <Route path="/Websites" element={<Websites />} />
          <Route path="/Something" element={<Something />} />
          <Route path="/" exact element={<Navigate to="/Dashboard/All" />} />
        </Routes>
      </>
    )
  }
}

export default App;