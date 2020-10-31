import React, { Component } from 'react';
import './login.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';

class Login extends Component {
    render() {
        return(
            <div className="login" >
                <div className="card" id="loginCard">
                    <div className="card-header" style={{backgroundColor: 'white', textAlign: 'center'}}>
                        <img src="http://www.thirdeyenet.com/images/leafnet.png" 
                        width="80" height="80" alt="Leaf Net" /><br/>
                    </div>
                    <div className="card-body" id="cardBody">
                        <span className="p-float-label mb-1">
                            <InputText autoFocus="true" type="text" className="p-inputtext-lg" id="textInput"/>
                            <label htmlFor="username">Username</label>
                        </span><br/>
                        <span className="p-float-label mb-1">
                            <InputText type="password" className="p-inputtext-lg" id="textInput"/>
                            <label htmlFor="password">Password</label>
                        </span><br/>
                        <div>
                            <a id="notLink" style={{color: 'green'}} href="#">Forgot password? Please contact Admin</a>
                        </div><br/>
                        <div style={{float: 'right'}}>
                            <a href="/register">
                                <button type="button" className="btn mr-2" id="loginBtn"><h4><i className="pi pi-plus-circle mr-2"></i>Register</h4></button>
                            </a>
                            <a href="/home">
                                <button type="button" className="btn" id="loginBtn"><h4><i className="pi pi-key mr-2"></i>Login</h4></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;