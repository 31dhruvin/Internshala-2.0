import React, { useContext,useState } from 'react';
import {BrowserRouter as Router, Link,Switch,Route, useHistory, Redirect} from 'react-router-dom'
import UserStore from "../Store/index";
import Login from './Login'
import SignUp from './SignUp' 
import {fire} from '../Firebase'
import Dashboard from './Dashboard'
import Employeer from './Employeer';
import Employee from './Employee';
import Admin from  './Admin'
import Welcome from './Welcome';
import Employeer1 from './Employeer1';
import Main2 from './Main2'
import Pune from './Pune';
import Mumbai from './Mumbai';
import Main from './Main'
const Navbar=(props) => {
  const history = useHistory()
  const datas=props.datas
  const { userData, setUserData } = useContext(UserStore);useState({
    auth:false,
  });
  const Logout = () =>{
    fire.auth().signOut().then(() => {
      setUserData({
        ...userData,
        auth:false,
        data:null,
      })
    }).catch((error) => {
      console.log(error.message)
    });
  }
    return(
      <Router>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand" style={{fontSize:"30px",cursor:"pointer"}}><strong>Internshala 2.0</strong></div>
          <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                userData.auth ? (
                  <li className="nav-item ml-4">
                <Link className="nav-link " aria-current="page" to="/home" style={{fontSize:"20px"}}><strong>Home</strong></Link>
              </li>
                )
                :(
                  <span></span>
                )
              }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {
                userData.auth ? (
                  <li className="nav-item">
                <Link onClick={Logout} className="nav-link" to="/login"style={{fontSize:"20px"}}>
                <strong>Logout</strong>
                </Link>
              </li>

                ):
                (
                  <span></span>
                )
              };
               <li className="nav-item">
                <Link className="nav-link" to="/pizza"style={{fontSize:"25px",display:"none"}}>
                <strong>Pizza</strong>
                </Link>
                <Link className="nav-link" to="/login"style={{fontSize:"25px",display:"none"}}>
                <strong>Login</strong>
                </Link>
                <Link className="nav-link" to="/signup"style={{fontSize:"25px",display:"none"}}>
                <strong>SignUp</strong>
                </Link>
                <Link className="nav-link" to="/"style={{fontSize:"25px",display:"none"}}>
                <strong>Welcome</strong>
                </Link>
              </li>     
            </ul>           
          </div>
        </div>
      </nav>
      <Switch>
      <Route exact path="/home">
          {
            userData.auth ? <Dashboard /> : <Redirect to="/"></Redirect>
          }
      </Route>
      <Route exact path="/employeer" component={Employeer}>
        </Route>
        <Route exact path="/employeer-panel" component={Employeer1}></Route>
        <Route exact path="/main2" component={Main2}></Route>
        <Route exact path="/main" component={Main}></Route>
        <Route exact path="/pune" component={Pune}></Route>
        <Route exact path="/mumbai" component={Mumbai}></Route>
        <Route exact path="/employee" component={Employee}>
        
        </Route>
        <Route exact path="/admin" component={Admin}>
        
        </Route>
        <Route exact path="/welcome" component={Welcome}>
        {
            userData.auth ? <Welcome /> : <Redirect to="/"></Redirect>
          }
        </Route>
      
      <Route exact path="/login">
              {userData.auth ? <Redirect to="/home" /> : <Login />}
            </Route>
            <Route exact path="/signup">
              {userData.auth ? <Redirect to="/home" /> : <SignUp />}
            </Route>
            
            <Route exact path="/">
              {userData.auth ? <Redirect to="/home" /> : <Welcome />}
            </Route>
            
      </Switch>
           </Router>
    )
}
export default Navbar;
