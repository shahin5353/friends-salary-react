import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const User = (props) => {
    const { name, email, img, yearlyIncome, address } = props.user;
    const { street, suite, city, zipcode } = address;
    const [friend,setFriend] = useState(false);
    let button= <button className="btn btn-primary" onClick={()=>{props.addSalaryHandler(props.user);setFriend(true)}}>Add Friend</button>
    if (friend) {
        button= <button className="btn btn-success" disabled>Friend Added</button>
    }
    return (
            <div className="card float-left text-center mb-3 ml-2 shadow" >
                <img className="card-img-top img-fixed rounded-circle" style={{ height: '250px', maxWidth: '18rem' }} src={img} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    {button}
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Yearly Income : ${yearlyIncome}</li>
                </ul>
                <p className="card-text"><b> Address:</b> &nbsp;
                    {street},
                    <br />
                    {suite},
                    <br />
                    {city},
                    <br />
                    {zipcode}
                </p>
                </div>
            </div>
    );
};

export default User;