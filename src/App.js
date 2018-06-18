import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={ to }
            exact={ activeOnlyWhenExact }
            children={({ match }) => {
                let active = match ? 'active abc' : '';
                return (
                    <li className={active}>
                        <Link
                            to={ to }
                            className="my-link"
                        >{label}</Link>
                    </li>
                );
            }}
        />
    );
}

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <ul className="nav navbar-nav">
                                <MenuLink label="Home" to="/" activeOnlyWhenExact={ true } />
                                <MenuLink label="About" to="/about" activeOnlyWhenExact={ false } />
                                <MenuLink label="Contact" to="/contact" activeOnlyWhenExact={ false } />
                            </ul>
                        </div>
                    </nav>
                    {/* Content */}
                    <Route exact path="/" component={ Home } />
                    <Route path="/about" component={ About } />
                    <Route path="/contact" component={ Contact } />
                </div>
            </Router>
        );
    }
}

export default App;
