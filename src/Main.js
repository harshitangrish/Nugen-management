import React, { Component } from "react";
import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar";
import cookie from 'react-cookies';
import 'whatwg-fetch';
class Main extends Component{

    constructor(props){
        super(props);
        if(cookie.load('token')===undefined){
            this.props.history.push("/");
        }
        this.state={
            url: 'http://192.168.1.17:3000/v1/admissions',
            info: [],
            loader: true
        };
        this.fetchInfo();
        
    }
    fetchInfo() {
        fetch(this.state.url)
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                console.log(res);
                this.setState({
                    info: res
                });
                this.toggleLoader();
            })

            .catch((err) => {
                console.log("Error while loading page", err);
            })
    }

    toggleLoader = () => {
        this.setState({
            loader: !this.state.loader
        });
    }


    render(){
        return(
            <div className="wrapper">
                
                <Sidebar />
                <div className="main-panel">
                    <Navbar history={this.props.history} />
                </div>
                <div className={this.state.loader === true ? 'loader' : 'hide-loader'}>
                
                </div>
            </div>
        );
    }
}

export default Main;