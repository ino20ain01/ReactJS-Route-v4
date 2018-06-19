import React, {Component} from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    onClick = isChecked => {
        this.setState({
            isChecked
        });
    }

    render() {

        let { isChecked } = this.state;

        return (
            <div>
                <p>Đây là Contact</p>
                <button type="button" className="btn btn-primary" onClick={ () => { this.onClick(false) } } >Cho phép !</button> &nbsp;
                <button type="button" className="btn btn-danger" onClick={ () => { this.onClick(true) } }>Không cho phép !</button>
                <Prompt
                    when={ isChecked }
                    message={ location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`) }
                />
            </div>
        );
    }
}

export default Contact;
