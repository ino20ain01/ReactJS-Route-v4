import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <ul className="nav navbar-nav">
                                <li className="active"><a>Home</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </div>
                    </nav>
                    {/* Content */}
                    <Route exact path="/" component={ Home } />
                    <Route path="/about" component={ About } />
                </div>
            </Router>
        );
    }
}

export default App;
