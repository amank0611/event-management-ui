import './App.css';
import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './secure/Home'
import About from './secure/About'
import Error from './secure/Error'
import Contact from './secure/Contact'
import RegisterForm from './secure/RegisterForm'
import Login from './secure/Login'
import Header from './secure/components/Header';
import Footer from './secure/components/Footer';
import EventList from './secure/events/EventList';
import AddEvent from './secure/events/AddEvent';
import axios from 'axios';
import Dashboard from './secure/dashboard/Dashboard';

export class App extends React.Component {
  //   state={
  //     redirect:false
  // }
  // componentDidMount =async()=>{
  //     try{
  //         const response=await axios.get('users/GetAuthUsers');
  //         console.log(response);
  //     }catch(e){
  //         this.setState({
  //            redirect :true
  //         })
  //     }
  // }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/' component={Home} exact />
          <Route path='/registerForm' component={RegisterForm} exact />
          <Route path='/about' component={About} exact />
          <Route path='/eventlist' component={EventList} exact />
          <Route path='/addevent' component={AddEvent} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;