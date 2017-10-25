import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router';

class SignUp extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: ''
    };

    componentWillMount(){
        this.setState({
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: ''
        });
    }

    render() {
        if(localStorage.getItem('username')){
            return(
                <Redirect to="/Welcome" />
            )
             
        }
        else{
            return (
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        <form>
                            <div className="form-group">
                                <h1>SignUp</h1>
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Firstname"
                                    placeholder="Enter Firstname"
                                    value={this.state.firstname}
                                    onChange={(event) => {
                                        this.setState({
                                            firstname: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Lastname"
                                    placeholder="Enter Lastname"
                                    value={this.state.lastname}
                                    onChange={(event) => {
                                        this.setState({
                                            lastname: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="email"
                                    label="Email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={(event) => {
                                        this.setState({
                                            email: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Username"
                                    placeholder="Enter Username"
                                    value={this.state.username}
                                    onChange={(event) => {
                                        this.setState({
                                            username: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="password"
                                    label="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={(event) => {
                                        this.setState({
                                            password: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={() => this.props.handleSignUp(this.state)}>
                                        SignUp
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            );          
        }

    }
}

export default SignUp;