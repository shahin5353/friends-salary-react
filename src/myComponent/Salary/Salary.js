import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Salary = (props) => {
    const income = props.addIncome;
    const totalIncome = income.reduce((totalIncome,user) => totalIncome + Number(user.yearlyIncome),0);
    const allName = income.reduce((allName,user) => allName +" "+ user.name +",","");
    return (
        <div>
            <div className="card text-white text-center bg-dark mb-3">
                <div className="card-header text-dark" style={{backgroundColor:'orange'}}><h5>Total Friends: {income.length}</h5></div>
                <div className="card-body">
                    <br/>
                    <h5 className="card-title text-success">Total Yearly Income: {totalIncome}</h5>
                    <br/>
                    <p className="card-text"><b style={{color:'orange'}}>Added friends:</b> {allName}</p>
                </div>
            </div>
        </div>
    );
};

export default Salary;