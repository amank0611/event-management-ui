import React, { Component, SyntheticEvent } from 'react';
import './Login.css';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");

class Login extends Component {

  userid = 0;
  email = '';
  password = '';
  state = {
    redirect: false
  }

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await axios.post(
      'Authentication/UserLogin?email=' + this.email + '&password=' + this.password,
    );
    //debugger
    if (response != null) {
      // var ciphertext = CryptoJS.AES.encrypt(response.data.userId, 'secret-key').toString();
      // var normaltext = CryptoJS.AES.decrypt(ciphertext, 'secret-key').toString(CryptoJS.enc.Utf8);
    }
    if (!!response.data._responseData.response) {
      if (response.data._responseData.response.userId > 0) {
        localStorage.setItem('token', response.data._responseData.response.userId);
        localStorage.setItem('role', response.data._responseData.response.roleId);
        axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token'), localStorage.getItem('role')}`;
        this.setState({
          redirect: true
        });
      }
      else{
        alert(response.data._responseData.response);
      }
    } else {
      alert("Invalid credentials");
    }
  }
  render() {
    if (this.state.redirect) {
      return window.location.href = "/";
    }
    return (
      <>
        <header className="masthead">
          <div className="container">
            <h5 className="card-title text-center">Login</h5>
            <div className="wrapper fadeInDown">
              <div id="formContent">
                <form onSubmit={this.submit} style={{ paddingTop: 35 }}>
                  <input type="text" id="email" className="fadeIn second" name="email"
                    onChange={e => this.email = e.target.value} placeholder="email" />
                  <input type="password" id="password" className="fadeIn third" name="login"
                    onChange={e => this.password = e.target.value} placeholder="password" />
                  <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>
                <div id="formFooter">
                  <Link className="nav-link js-scroll-trigger" to={'/RegisterForm'}>Register</Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Login;