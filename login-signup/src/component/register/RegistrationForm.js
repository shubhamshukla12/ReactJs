import React, {Component} from 'react';
import './RegistrationForm.css';
import {Link} from 'react-router-dom';
class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
            errorMsg: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        let status = true;
        if ((this.state.username === '')||(this.state.email === '')||(this.state.password === '')) {
            status = false;
            this.setState({errorMsg: "Fields are Empty"});
            
        }
        // if (this.state.email === '') {
        //     status = false;
        //     this.setState({errorMsg: "Email field is Empty"});
        // }
        if ((this.state.confirmPassword !== this.state.password)) {
            status = false;
            this.setState({errorMsg: 'Password and Confirm Password does not match'});
        }

        else if (status) {
            localStorage.setItem('name', this.state.name);
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);
            localStorage.setItem('address', this.state.address);

            this.setState({errorMsg: "User added Successfully"});
            this.mainInput.value = "";

        }
        // this.mainInput.value = "";
        e.preventDefault();

    }

    render() {
        return (

            <div className="col s12">
                <div><h4 className="center-align">Register Here</h4></div>
                <div className="text-center"><p>{this.state.errorMsg}</p></div>
                <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="input-field">
                        <input type="text" placeholder="name" name="name" value={this.state.name}
                               onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <input type="email" placeholder="Email" name="email" value={this.state.email}
                               onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <input type="text" placeholder="Username" name="username" value={this.state.username}
                               onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <input type="password" placeholder="Password" name="password" value={this.state.password}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Confirm Password" name="confirmPassword"
                               value={this.state.confirmPassword}
                               onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <input type="text" placeholder="Address" name="address" value={this.state.address}
                               onChange={this.handleChange}/>
                    </div>

                    <div className="row text-center">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        </button>
                    </div>
                    <div className="row text-center">
                        <Link to={'/login'}>Login</Link>
                    </div>

                </form>
            </div>
        );
    }
}
export default RegistrationForm;


