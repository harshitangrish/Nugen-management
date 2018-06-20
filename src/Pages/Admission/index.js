import React , {Component} from "react";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import AdmissionForm from './AdmissionForm';
import TableAdmissions from './TableAdmissions';

class Admission extends Component {
    render() {
        return (
            <div className="wrapper">

                <Sidebar />
                <div className="main-panel">
                    <Navbar history={this.props.history} />
                    <div className="content">
                    <div className="container-fluid">
                        
                            <AdmissionForm />
                            <TableAdmissions/>
             
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
}
export default Admission;