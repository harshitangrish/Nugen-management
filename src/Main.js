import React, { Component } from "react";
import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar";
import cookie from 'react-cookies';

class Main extends Component{

    constructor(props){
        super(props);
        if(cookie.load('token')===undefined){
            this.props.history.push("/");
        }
    }



    render(){
        return(
            <div className="wrapper">
                <Sidebar />
                <div className="main-panel">
                    <Navbar history={this.props.history} />
                </div>
            </div>
        );
    }
}

export default Main;