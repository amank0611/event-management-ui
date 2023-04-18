import React, { Component } from 'react'

const Dashboard = () => {
    return (
        <div className="container">
            <div className="wrapper fadeInDown">
                <div id="formContentgroup" >
                    <div id="formFooter">
                        <div className="card-title ">
                            <h5>Dashboard </h5>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 col-md-6 col-lg-6">
                                <div className="card text-center">
                                    <div className="card-header">Featured</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                    <div className="card-footer text-muted">2 days ago</div>
                                </div>
                            </div>
                            <div className="col-sm-9 col-md-6 col-lg-6">
                                <div className="card text-center">
                                    <div className="card-header">Featured</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                    <div className="card-footer text-muted">3 days ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;