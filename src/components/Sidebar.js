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
                        <a href="#" className="simple-text">
                            Nugen I.T Services
                        </a>
                    </div>
                    <ul className="nav">
                        <li className="active">
                            <a href="#">
                                <i className="fa fa-pie-chart"/>
                                <p>Dashboard</p>
                            </a>
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