import React,{ Component } from 'react';
import Helper from '../../components/Helper';
import Tablerow from './Tablerow';


class Table extends Component {

    constructor(props){
        super(props);
        this.state={
            table_Data :[],
            open:false
        }

    }
    componentWillMount = ()=>{
        this.fetchData();
    }
    fetchData = ()=> {
        let body={}
        let res = Helper("http://192.168.1.17:3000/v1/expenditures",'GET',body);

        res.then((res) => {
            this.setState({
                table_Data:res
            });
        })
    }

   


    render(){
        const {open} =this.state;
        return (
        
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="header">
                        
                        <h4 className="title">Expenditures Table</h4>
                        <p className="category">Complete details of all Expenditures</p>
                    
                    </div>
                    <div className="content table-responsive table-full-width">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Paid By</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Date/Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.table_Data.map((data)=>{
                                        return(
                                            <Tablerow {...data} />
                                        );
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}
}

export default Table;