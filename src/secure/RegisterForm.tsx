import React, { Component, SyntheticEvent } from 'react';
import './Login.css';
import './RegisterForm.css';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

class RegisterForm extends Component {
  inputUserame = '';
  inputEmail = '';
  inputPassword = '';
  inputAddress = '';
  userRoleId = 2; // 3 set for default user
  state = {
    redirect: false,
    usernameError: '',
    emailError: '',
    passwordError: '',
    addressError: ''
  }


  handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await axios.put(
      'Authentication/RegisterUser',
      {
        Name: this.inputUserame,
        Email: this.inputEmail,
        Password: this.inputPassword,
        Address: this.inputAddress,
        RoleId: this.userRoleId
      });
    if (response.data) {
      alert('Added Successfully');
    }
    else {
      alert('Added Unsuccessfully');
    }
    this.setState({
      redirect: true
    })
  }
  formValidate = () => {
    let usernameError = '';
    let emailError = '';
    let passwordError = '';
    let addressError = '';

    if (!this.inputUserame) {
      usernameError = "";
    }
    if (!this.inputEmail.includes("@")) {
      emailError = "";
    }
    if (!this.inputPassword) {
      passwordError = "";
    }
    if (!this.inputAddress) {
      addressError = "";
    }
  }
  render() {
    if (this.state.redirect) {
      return window.location.href = "/Login";
    }
    return (
      <header className="masthead">
        <div className=" container">
          <div className="row wrapper fadeInDown">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card card-signin flex-row my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>

                  <form className="form-signin form" onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                      <input type="text" id="inputUserame" onChange={e => this.inputUserame = e.target.value} className="form-control" placeholder="Username" />
                      {/* <div style={{ color: "red" }}>{this.state.usernameError}</div> */}
                    </div>
                    <div className="form-label-group">
                      <input type="text" id="inputEmail" onChange={e => this.inputEmail = e.target.value} className="form-control" placeholder="Email address" />
                      {/* <div style={{ color: "red" }}>{this.state.emailError}</div> */}
                    </div>
                    <div className="form-label-group">
                      <input type="text" id="inputPassword" onChange={e => this.inputPassword = e.target.value} className="form-control" placeholder="Password" />
                      {/* <div style={{ color: "red" }}>{this.state.passwordError}</div> */}
                    </div>
                    <div className="form-label-group">
                      <input type="text" id="inputAddress" onChange={e => this.inputAddress = e.target.value} className="form-control" placeholder="Address" />
                      {/* <div style={{ color: "red" }}>{this.state.addressError}</div> */}
                    </div>
                    <div className="form-label-group">
                      <button className="btn btn-primary btn-sm btn-block text-uppercase" type="submit">Register</button>
                    </div>
                  </form>
                  
                  <hr className="my-4" />
                  <Link className="d-block text-center mt-2 small" to={'/Login'}>Sign In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default RegisterForm;