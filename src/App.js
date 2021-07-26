import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Community from "./routes/Community";
import Detail from "./routes/Detail";
import Navigation from './components/Navigation';
import "./App.css";

function App(){
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Route path="/" exact={true} component={Home}/> 
      <Route path="/about" component={About}/>
      <Route path="/auth/login" component={Login}/>
      <Route path="/auth/register" component={Register}/>
      <Route path="/community" component={Community}/>
      <Route path="/movie/:id" component={Detail}/>
    </BrowserRouter>
  );
}

export default App;