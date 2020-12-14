import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/shade.component";
import ReactDOM from 'react-dom';
import Slider from 'react-rangeslider'
import SignUp from "./components/shade2.component";
 

const shade2 = () => <h1></h1>
function App() {
  return (<Router>
    <div className="App">
      <div className="auth-wrapper">
      <p className="text_header_shade2">Shade 1 คำถามเชิงจิตวิทยาวัดทักษะของนักศึกษา</p>
      <div className="myProgress">
          <div className="myBar">
          <div className="label">0%</div>
          </div>
      </div>

        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/shade" />
          </Switch>         
        </div>  
      </div>             
    </div>      
    </Router>   
  );  
};
export default App;
