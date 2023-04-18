import { debug } from 'console';
import { parse } from 'path';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Header extends Component {
    state = {
        redirect: false
    }
    handleClick = () => {
        localStorage.clear();
        this.setState({
            redirect: true
        })
    }
    render() {
        // debugger;
        if (this.state.redirect) {
            return window.location.href = "/";
        }
        //debugger;
        const auth = localStorage.getItem('token');
        var isAdmin = localStorage.getItem('role')?.toString() == "1" ? true : false;
        return <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top " id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger " href="/"><p className="navbar-brand">Event Management</p></a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    <i className="fas fa-bars ml-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            {isAdmin ? (<li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to={'/Dashboard'}>Dashboard</NavLink></li>) : ('')}
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to={'/'}>Services</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to={'/About'}>About</NavLink></li>
                            {auth ? (<li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to={'/EventList'}>Events</NavLink></li>) : ''}
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to={'/'}>Team</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to={'/Contact'}>Contact</NavLink></li>
                            {auth ? (
                                <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" onClick={this.handleClick} to={'/'}>Logout</NavLink></li>

                            ) : (
                                    <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to={'/Login'}>Login</NavLink></li>
                                )}

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    }
}
export default Header;