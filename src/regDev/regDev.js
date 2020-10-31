import React, { Component } from 'react';
import './regDev.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

class RegDev extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DevType: null,
            DevLoc: null,
            selectedCountry: null
        };
        this.DevTypes = [
            { name: 'Hydroponics', code: 'HP' },
            { name: 'Drip', code: 'DP' }
        ];
        this.DevLocs = [
            { name: 'Indoor', code: 'IN' },
            { name: 'Outdoor', code: 'OUT' }
        ];
        this.DevTypeChange = this.DevTypeChange.bind(this);
        this.DevLocChange = this.DevLocChange.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
    }

    DevTypeChange(e) {
        this.setState({ DevType: e.value });
    }

    DevLocChange(e) {
        this.setState({ DevLoc: e.value });
    }

    onCountryChange(e) {
        this.setState({ selectedCountry: e.value });
    }

    render() {
        return(
            <div className="regDev">
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'green'}} id="loginNav">
                    <a className="navbar-brand" href="leafnet.in">
                        <img src="http://www.thirdeyenet.com/images/leafnet.png" 
                        width="40" height="40" alt="Leafnet" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link mr-3" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-3" href="/regdev">Register Device</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/condev">Control Device</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="card" id="regDevCard">
                    <div className="card-header" style={{backgroundColor: 'white', textAlign: 'center'}}>
                        <h1 style={{color: 'green'}}>Register Device</h1>
                    </div>
                    <div className="card-body" id="cardBody">
                        <div className="cardItem">
                            <span className="p-float-label mb-1">
                                <InputText autoFocus="true" type="text" className="p-inputtext-lg" id="textInput"/>
                                <label htmlFor="devName">Device Name</label>
                            </span>
                        </div>
                        <div className="cardItem">
                            <span className="p-float-label mb-1">
                                <Dropdown id="devType" value={this.state.DevType} options={this.DevTypes} onChange={this.DevTypeChange} optionLabel="name"/>
                                <label htmlFor="devType">Device Type</label>
                            </span>
                        </div>
                        <div className="cardItem">
                            <span className="p-float-label mb-1">
                                <Dropdown id="devType" value={this.state.DevLoc} options={this.DevLocs} onChange={this.DevLocChange} optionLabel="name"/>
                                <label htmlFor="devLoc">Device Location</label>
                            </span>
                        </div>
                        <div className="cardItem">
                            <span className="p-float-label mb-1">
                                <InputText type="text" className="p-inputtext-lg" id="textInput"/>
                                <label htmlFor="wifiConfig">Wifi Config</label>
                            </span>
                        </div>
                        <div className="cardItem">
                            <button style={{width: '100%'}} type="button" id="regDevBtn" className="btn"><h4><i className="pi pi-check-square mr-2"></i>Verify Device</h4></button>
                        </div>
                        <div style={{float: 'right'}}>
                            <a href="/home">
                                <button type="button" className="btn mr-2" id="regDevBtn"><h4><i className="pi pi-times mr-2"></i>Cancel</h4></button>
                            </a>
                            <a href="#">
                                <button type="button" className="btn" id="regDevBtn"><h4><i className="pi pi-plus-circle mr-2"></i>Register</h4></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegDev;