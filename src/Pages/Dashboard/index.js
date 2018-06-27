import React, { Component } from "react";
import Sidebar from '../../components/Sidebar';
import Navbar from "../../components/Navbar";
import cookie from 'react-cookies';
import Cards from "./Cards";
import Students from './Students';
import 'whatwg-fetch';
class Dashboard extends Component{

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
                
                <div className={this.state.loader === true ? 'loader' : 'hide-loader'}>
                </div>
                
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <Cards background="danger" number="Admissions" heading="ADMISSIONS" icon="user" />
                            <Cards background="success" number="Projects" heading="PROJECTS" icon="desktop" />
                            <Cards background="warning" number="Expenditures" heading="EXPENDITURES" icon="inr" />
                            <Cards background="primary" number="Savings" heading="SAVINGS" icon="key" />
                        </div>
                    </div>
                

                <Students/>
                </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;