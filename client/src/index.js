import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import {  Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import CreateForm from './components/CreateForm';
// import Profile from './components/Profile';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter} from 'react-router-dom';
import Register from './Register';
import TenantScreen from './TenantScreen';
import HostScreen from './HostScreen';
import CreateContract from './CreateContract';
import HostProfile from './HostProfile';
import TenantProfile from './TenantProfile';
import InformationTenancy from './InfomationTenancy';
import ListHouseRent from  './ListHouseRent';
import InfoHome from './InfoHome';


ReactDOM.render(
  (
  <HashRouter>
     <div>
       <Route exact path="/" component={Home} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/host/dangtin" component={CreateForm} />
       <Route exact path="/host/profile" component={HostProfile}/>
       <Route exact path ="/host/taohopdong" component = {CreateContract}/>
       <Route exact path="/register" component={Register} />
       <Route exact path ="/host" component = {HostScreen}/>
       <Route exact path = "/tenant" component = {TenantScreen}/>
       <Route exact path = "/tenant/profile"  component = {TenantProfile} />
       <Route exact path = "/tenant/thongtinthuenha" component = {InformationTenancy}/>
       <Route exact path = "/host/danhsachnhachothue" component = {ListHouseRent}/>
       <Route exact path = "/infohome" component = {InfoHome}/>
     </div>
  </HashRouter >
), document.getElementById( 'root' ) )

registerServiceWorker();
