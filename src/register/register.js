import React, { Component } from 'react';
import './register.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';

class Register extends Component {
    render() {
        return(
            <div className="register" >
                <div className="card" id="regCard">
                    <div className="card-header" style={{backgroundColor: 'white', textAlign: 'center'}}>
                        <img src="http://www.thirdeyenet.com/images/leafnet.png" 
                        width="80" height="80" alt="Leaf Net" /><br/>
                    </div>
                    <div className="card-body" id="cardBody">

                        <span className="p-float-label mb-1">
                            <InputText autoFocus="true" type="text" className="p-inputtext-lg" id="name"/>
                            <label htmlFor="name">Name</label>
                        </span><br/>
                        <span className="p-float-label mb-1">
                            <InputText type="email" className="p-inputtext-lg" id="email"/>
                            <label htmlFor="email">Email</label>
                        </span><br/>
                        <span className="p-float-label mb-1">
                            <InputText type="text" className="p-inputtext-lg" id="username"/>
                            <label htmlFor="username">Username</label>
                        </span><br/>
                        <span className="p-float-label mb-1">
                            <InputText type="password" className="p-inputtext-lg" id="password"/>
                            <label htmlFor="password">Password</label>
                        </span><br/>
                        <span className="p-float-label mb-1">
                            <InputText type="password" className="p-inputtext-lg" id="cnfpassword"/>
                            <label htmlFor="cnfpassword">Confirm Password</label>
                        </span><br/>

                        <div style={{float: 'right'}}>
                            <a href="/">
                                <button type="button" className="btn mr-2" id="regBtn"><h4><i className="pi pi-key mr-2"></i>Login instead</h4></button>
                            </a>
                            <a href="#">
                                <button type="button" className="btn" id="regBtn"><h4><i className="pi pi-plus-circle mr-2"></i>Register</h4></button>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;