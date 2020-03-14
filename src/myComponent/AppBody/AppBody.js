import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fakeData from '../../fakeData';
import User from '../User/User';
import Salary from '../Salary/Salary';
import './AppBody.css'

const AppBody = () => {
    const [users,setUsers] = useState(fakeData);
    const [addIncome, setAddIncome] = useState([]);
    const addSalaryHandler = (user) => {
        const newIncome = [...addIncome, user];
        setAddIncome(newIncome); 
    };
    
    return (
        <div className="row mx-auto">
        <div className="col-lg-8 col-md-7 col-sm-6 col-xs-6">
       <div className="list">
       {
        users.map(user => <User user={user} addSalaryHandler={addSalaryHandler}></User>)
        }
       </div>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-6 col-xs-6">
            <Salary addIncome={addIncome}></Salary>
        </div>
        </div>
    );
};

export default AppBody;