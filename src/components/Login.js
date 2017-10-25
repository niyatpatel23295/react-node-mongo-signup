import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link,} from 'react-router-dom';
import { Redirect} from 'react-router';
class Login extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            username: '',
            password: ''
        });
    }


    render() {
        if(localStorage.getItem('username')){
            console.log('YESSS');
            return(
                <Redirect to="/welcome" />
            )
        }
        else{
            return (
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        <form>
                            <div className="form-group">
                                <h1>Login</h1>
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
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            onClick={() => this.props.handleSubmit(this.state)}>
                                            SignIn
                                        </button>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <Link to="/signup" > 
                                            <button
                                                className="btn btn-primary"
                                                type="button">
                                                SignUp
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                  
                            </div>
                        </form>
                    </div>
                </div>
            );          
        }

    }
}

export default Login;