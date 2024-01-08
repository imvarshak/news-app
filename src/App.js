import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
 
 export default class App extends Component {
   render() {
     return (
       <div>
         <Router>
           <Navbar />
           <Routes>
          <Route exact path="/" element={<News key="general" pageSize={5} category="general" country="in"/>}></Route>
          <Route exact path="/business" element={<News key="business" pageSize={5} category="business" country="in"/>}></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={5} category="technology" country="in"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={5} category="sports" country="in" />}></Route>
          <Route exact path="/health" element={<News key="health" pageSize={5} category="health" country="in"/>}></Route>
          <Route exact path="/science" element={<News key="science" pageSize={5} category="science" country="in"/>}></Route>
        </Routes>
         </Router>
       </div>
     )
   }
 }
 
