import React, { Component } from "react";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import ExpenditureForm from "./ExpenditureForm";
import Table from './Table';

class Expenditure extends Component {
    render() {
        return (
            <div className="wrapper">

                <Sidebar />
                <div className="main-panel">
                    <Navbar history={this.props.history} />
                    <div className="content">
                    <div className="container-fluid">
                        
                            <ExpenditureForm />
                        
                            
                                <Table />
                            
                    </div>
                   
                </div>
                </div>
                
            </div>
        );
    }
}

export default Expenditure;