import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div
                className="sidebar"
                data-color="purple"
                data-image="assets/img/sidebar-5.jpg">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <Link to="/dashboard" className="simple-text">
                            Nugen I.T Services
                        </Link>
                    </div>
                    <ul className="nav">
                        <li className="active">
                            <Link to="/dashboard">
                                <i className="fa fa-pie-chart"/>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Admission">
                                <i className="fa fa-user"/>
                                <p>Student Addmission</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Expenditure">
                                <i className="fa fa-inr"/>
                                <p>Expenditure</p>
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-desktop"/>
                                <p>Projects</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-key"/>
                                <p>Savings</p>
                            </a>
                        </li>
                       
                     
                    </ul>
                </div>
            </div>

        );
    }
}

export default Sidebar;