import React, { Component } from "react";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { required, email } from '../../components/Validator';
import Helper from '../../components/Helper';


class AdmissionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            student_name:'',
            email:'',
            mobile_number:'',
            school_college:'',
            stream: '',
            father_mother_name: '',
            parent_mobile_number: '',
            permanent_address:'',
            course_id:123,
            total_fee:'',
            advance_payment:'',
            total_installments: [],
            referred_by: '',
            dob: '',
        }
    }
    componentDidUpdate=()=>{
        console.log(this.state);
    }

    setInstallment = (e) => {
        this.setState({
            total_installments: []
        });
        if (e.target.value === 0) {
            let inst = this.state.total_installments;
            inst.push(e.target.value)
            this.setState({
              total_installments: e.target.value
            });
        }
        else {
            let i = 1;
            for (i = 1; i <= e.target.value; i++) {
                let inst = this.state.total_installments;
                inst.push(i)
                this.setState({
                    total_installments: inst
                });
            }
        }

    }

    setstudent_name = (e) => {
        this.setState({
            student_name: e.target.value
        });
    }

    setdob = (e) => {
        this.setState({
            dob: e.target.value
        });
    }

    setemail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    setmobile_number = (e) => {
        this.setState({
            mobile_number: e.target.value
        });
    }

   

    setschool_college = (e) => {
        this.setState({
            school_college: e.target.value
        });
    }

    setpermanent_address = (e) => {
        this.setState({
            permanent_address: e.target.value
        });
    }

    setstream = (e) => {
        this.setState({
            stream: e.target.value
        });
    }

   

    setfather_mother_name = (e) => {
        this.setState({
            father_mother_name: e.target.value
        });
    }

    setparent_mobile_number = (e) => {
        this.setState({
            parent_mobile_number: e.target.value
        });
    }

    setcourse_id = (e) => {
        this.setState({
            course_id: e.target.value
        });
    }

    settotal_fee = (e) => {
        this.setState({
            total_fee: e.target.value
        });
    }

    setadvance_payment = (e) => {
        this.setState({
            advance_payment: e.target.value
        });
    }

    settotal_installments = (e) => {
        this.setState({
            total_installments: e.target.value
        });
    }

    setreferred_by = (e) => {
        this.setState({
            referred_by: e.target.value
        });
    }


    addInfo = () => {
        let body = JSON.stringify({
            student_name:this.state.student_name,
            email:this.state.email,
            mobile_number:this.state.mobile_number,
            school_college:this.state.school_college,
            stream: this.state.stream,
            father_mother_name: this.state.father_mother_name,
            parent_mobile_number: this.state.parent_mobile_number,
            permanent_address:this.state.permanent_address,
            course_id:this.state.course_id,
            total_fee:this.state.total_fee,
            advance_payment:this.state.advance_payment,
            total_installments: [],
            referred_by:this.state.referred_by,
            dob: this.state.dob,
        });
        console.log(body);
        let res = Helper("http://192.168.1.12:3000/v1/admissions", 'POST', body);

        res.then((res) => {
            console.log(res.content);
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
                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Student Details</h4>
                        </div>

                        <div className="content">
                            <Form>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Student Name</label>
                                            <Input type="text" className="form-control" placeholder="Student Name" 
                                            onKeyUp={this.setstudent_name} validations={[required]} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Date Of Birth</label>
                                            <Input type="date" className="form-control" placeholder="dd/mm/yy"
                                            onKeyUp={this.setdob} validations={[required]} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email Address</label>
                                            <Input type="email" className="form-control" placeholder="Email" autofocus
                                                onKeyUp={this.setemail} validations={[required, email]} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Mobile No.</label>
                                            <Input type="text" className="form-control" placeholder="Mobile No." 
                                            onKeyUp={this.setmobile_number} validations={[required]}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>School/College</label>
                                            <Input type="text" className="form-control" placeholder="School/College"
                                            onKeyUp={this.setschool_college} validations={[required]} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Stream</label>
                                            <Input type="text" className="form-control" placeholder="Stream" 
                                            onKeyUp={this.setstream} validations={[required]}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Permanent Address</label>
                                            <Input type="text" className="form-control" placeholder="Permanent Address" 
                                            onKeyUp={this.setpermanent_address} validations={[required]}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Father's Name/ Mother's Name</label>
                                            <Input type="text" className="form-control" placeholder="Father's Name/ Mother's Name"
                                            onKeyUp={this.setfather_mother_name} validations={[required]} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Parent's Mobile No.</label>
                                            <Input type="text" className="form-control" placeholder="Parent's Mobile No."
                                            onKeyUp={this.setparent_mobile_number} validations={[required]} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Course Interested In</label>
                                            <Input type="text" className="form-control" placeholder="Course" 
                                            onKeyUp={this.setcourse_id} validations={[required]}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Total Fees</label>
                                            <Input type="text" className="form-control" placeholder="Total fees"
                                            onKeyUp={this.settotal_fee} validations={[required]} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Advance Payment</label>
                                            <Input type="text" className="form-control" placeholder="Advance Payment" 
                                            onKeyUp={this.setadvance_payment} validations={[required]}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Total Installments</label>
                                            <Input type="text" className="form-control" placeholder="No. Of Installments" min="0" max="20" onChange={this.setInstallment} 
                                            onKeyUp={this.setInstallment} validations={[required]}/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Referred By</label>
                                            <Input type="text" className="form-control" placeholder="Referred By" 
                                            onKeyUp={this.setreferred_by} validations={[required]}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>To Be Paid On</label>
                                            {
                                                this.state.total_installments.map((installment) => {
                                                    return (

                                                        <Input type="date" className="form-control" placeholder="dd/mm/yy" 
                                                        onKeyUp={this.email} validations={[required]}/>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-info btn-fill pull-right" onClick={this.addInfo}>ADD</button>
                                <div className="clearfix" />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default AdmissionForm;