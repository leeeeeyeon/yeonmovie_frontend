import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";

import Board from "./routes/board/Board";
import Create from "./routes/board/Create";

import Login from "./routes/user/Login";
import Register from "./routes/user/Register";

import Api from './routes/Api';

import Navigation from './components/Navigation';

import "./App.css";

function App(){
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Route path="/" exact={true} component={Home}/> 
      <Route path="/about" component={About}/>
      <Route path="/movie/:id" component={Detail}/>

      <Route path="/board" exact={true} component={Board}/>
      <Route path="/board/create" component={Create}/>

      <Route path="/auth/login" component={Login}/>
      <Route path="/auth/register" component={Register}/>

      <Route path="/api" component={Api}/>
      
    </BrowserRouter>
  );
}

export default App;