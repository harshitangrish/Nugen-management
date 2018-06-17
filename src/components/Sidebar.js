import React, {Component} from "react";


class Sidebar extends Component {
    render() {
        return (
            <div
                className="sidebar"
                data-color="purple"
                data-image="assets/img/sidebar-5.jpg">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text">
                            Creative Tim
                        </a>
                    </div>
                    <ul className="nav">
                        <li className="active">
                            <a href="dashboard.html">
                                <i className="pe-7s-graph"/>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <a href="user.html">
                                <i className="pe-7s-user"/>
                                <p>User Profile</p>
                            </a>
                        </li>
                        <li>
                            <a href="table.html">
                                <i className="pe-7s-note2"/>
                                <p>Table List</p>
                            </a>
                        </li>
                        <li>
                            <a href="typography.html">
                                <i className="pe-7s-news-paper"/>
                                <p>Typography</p>
                            </a>
                        </li>
                        <li>
                            <a href="icons.html">
                                <i className="pe-7s-science"/>
                                <p>Icons</p>
                            </a>
                        </li>
                        <li>
                            <a href="maps.html">
                                <i className="pe-7s-map-marker"/>
                                <p>Maps</p>
                            </a>
                        </li>
                        <li>
                            <a href="notifications.html">
                                <i className="pe-7s-bell"/>
                                <p>Notifications</p>
                            </a>
                        </li>
                        <li className="active-pro">
                            <a href="upgrade.html">
                                <i className="pe-7s-rocket"/>
                                <p>Upgrade to PRO</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Sidebar;