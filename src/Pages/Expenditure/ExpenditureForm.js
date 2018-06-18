import React, { Component } from "react";
import Helper from '../../components/Helper';
import Table from './Table';

class ExpenditureForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paid_by: '',
            description: '',
            amount: '',

        };
    }

    setPaid_by = (e) => {
        this.setState({
            paid_by: e.target.value
        });

    }
    setDescription = (e) => {
        this.setState({
            description: e.target.value
        });

    }
    setAmount = (e) => {
        this.setState({
            amount: e.target.value
        });

    }



    addDetails = () => {
        let body = JSON.stringify({
            paid_by: this.state.paid_by,
            description: this.state.description,
            amount: this.state.amount
        });
        console.log(body);
        let res = Helper("http://192.168.1.12:3000/v1/expenditures", 'POST', body);

        res.then((res) => {
            console.log(res);
            if (res.msg === 1) {
                alert("Post saved successfully");

            }
            else {
                alert("Error while saving post");

            }

        });
    }
    render() {
        return (
            <div className="row">


                <div className="col-md-8">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Expenditure Details</h4>
                        </div>
                        <div className="content">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Paid By</label>
                                            <input type="text" className="form-control" onKeyUp={this.setPaid_by} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input type="text" className="form-control" onKeyUp={this.setDescription} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Amount</label>
                                            <input type="text" className="form-control" onKeyUp={this.setAmount} />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-info btn-fill pull-right" onClick={this.addDetails}>Add Details</button>
                                <div className="clearfix" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Table />
                </div>
            </div>

        );
    }
}

export default ExpenditureForm;