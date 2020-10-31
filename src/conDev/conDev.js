import React, { Component } from 'react';
import './conDev.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { SelectButton } from 'primereact/selectbutton';
import TimePicker from 'react-time-picker';

class ConDev extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: 'On',
            pressure: 'On',
            humid: 'On',
            battery: 'On'
        };
        this.options = ['Off', 'On'];
    }

    render() {
        
        return(
            <div className="conDev">
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'green'}} id="loginNav">
                    <a className="navbar-brand" href="#">
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

                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-12-xs">
                            <div className="card">
                                <div className="card-header" style={{backgroundColor: 'green'}}>
                                    <h3 style={{color: 'white'}}>Device Information</h3>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <i id="texticon" className="pi pi-power-off"></i>
                                        <span id="text" className="ml-3">ON</span>
                                    </div>
                                    <div className="mb-3">
                                        <i id="texticon" className="pi pi-clock"></i>
                                        <span id="text" className="ml-3">08:35:12 AM IST</span>
                                    </div>
                                    <div>
                                        <i id="texticon" className="pi pi-compass"></i>
                                        <span id="text" className="ml-3">Temperature: 92F</span><br/>
                                        <span id="text" className="textmargin">Pressure: 1.05bar</span><br/>
                                        <span id="text" className="textmargin">Humidity: 78%</span><br/>
                                        <span id="text" className="textmargin">Battery: 57%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12-xs">
                            <div className="card">
                                <div className="card-header" style={{backgroundColor: 'green'}}>
                                    <h3 style={{color: 'white'}}>Power Control</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6" id="text"  style={{textAlign: 'right'}}>
                                            Temperature sensor 
                                        </div>
                                        <div className="col-6" style={{textAlign: 'center'}}>
                                            <SelectButton value={this.state.temp} options={this.options} onChange={(e) => this.setState({ temp: e.value })} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6" id="text"  style={{textAlign: 'right'}}>
                                            Pressure sensor 
                                        </div>
                                        <div className="col-6" style={{textAlign: 'center'}}>
                                            <SelectButton value={this.state.pressure} options={this.options} onChange={(e) => this.setState({ pressure: e.value })} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6" id="text"  style={{textAlign: 'right'}}>
                                            Humidity sensor 
                                        </div>
                                        <div className="col-6" style={{textAlign: 'center'}}>
                                            <SelectButton value={this.state.humid} options={this.options} onChange={(e) => this.setState({ humid: e.value })} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6" id="text"  style={{textAlign: 'right'}}>
                                            Battery sensor 
                                        </div>
                                        <div className="col-6" style={{textAlign: 'center'}}>
                                            <SelectButton value={this.state.battery} options={this.options} onChange={(e) => this.setState({ battery: e.value })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12-xs">
                            <div className="card">
                                <div className="card-header" style={{backgroundColor: 'green'}}>
                                    <h3 style={{color: 'white'}}>Timer Control</h3>
                                </div>
                                <div className="card-body"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ConDev;