import React , {Component} from "react";

const Cards =(props)=>
    {
        return(
            <div className="col-lg-3 col-6">
            <div className={"small-box bg-" +props.background}>
                <div className="inner">
                    <h4>{props.number}</h4>
                    <p>{props.heading}</p>
                </div>
                <div className="icon">
                    <i className={"fa fa-"+props.icon}/>
                </div>
                <a href="#" className="small-box-footer">VIEW DETAILS
                    <i className="fa fa-arrow-circle-right"/></a>
            </div>
        </div>


        );
    }

export default Cards;