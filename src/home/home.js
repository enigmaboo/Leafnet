import React,{ Component } from 'react';
import './home.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class Home extends Component {
    render() {
        return(
            <div className="home">
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
                
            </div>
        );
    }
}

export default Home;