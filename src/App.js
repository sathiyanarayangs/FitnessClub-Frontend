import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Trainers from './components/Trainers';
import Classes from './components/Classes';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';
import Users from './components/Admin/Users';
import AddClasses from './components/Admin/AddClasses';
import AddTrainer from './components/Admin/AddTrainer';
import Messages from './components/Admin/Messages';
import ViewTrainers from './components/Admin/ViewTrainers';
import CoursePage from './components/CoursePage';
import Schedule from './components/Schedule';

import { initialState, reducer } from './reducer/UseReducer';
import Footer from './components/Footer';
import About from './components/About';

// Context API
export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<Schedule/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/users" element={<Users/>} />
      <Route path="/messages" element={<Messages/>} />
      <Route path="/addclasses" element={<AddClasses/>} />
      <Route path="/addtrainer" element={<AddTrainer/>} />
      <Route path="/viewtrainers" element={<ViewTrainers/>} />
      <Route path="/classes/:classID" element={<CoursePage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
};

const App = () => {

  const [state, dispatch]=useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      <Router>
        <div>
          <Navbar />
          <Routing />
          <Footer/>
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
