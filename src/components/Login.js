import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassword: ''
        }
    }

    onChange = e => {
        let target = e.target,
            name = target.name,
            value = target.type === 'Checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onLogin = e => {
        e.preventDefault();
        let { txtUserName, txtPassword } = this.state;
        if (txtUserName === 'admin' && txtPassword === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                username: txtUserName,
                password: txtPassword
            }));
        }
    }

    render() {

        let { location } = this.props;
        let { txtUserName, txtPassword } = this.state;
        let loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            return <Redirect to={{
                pathname: '/products',
                state: {
                    from: location
                }
            }} />
        }

        return (
            <div className="row">
                <div className="container">
                    <div className="col-md-6 col-md-offset-3">
                        <form onSubmit={ this.onLogin }>
                            <div className="form-group">
                                <label htmlFor="username">User name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="User Name"
                                    name="txtUserName"
                                    value={ txtUserName }
                                    onChange={ this.onChange }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    name="txtPassword"
                                    value={ txtPassword }
                                    onChange={ this.onChange }
                                />
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
