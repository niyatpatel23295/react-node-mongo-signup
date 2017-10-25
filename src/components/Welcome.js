import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router';
class Welcome extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        handleLogout: PropTypes.func.isRequired
    };

    state = {
        username : '',
        email: ''
    };

    componentWillMount(){

        this.setState({
            username : localStorage.getItem('username'),
            email: localStorage.getItem('email'),
            firstname: localStorage.getItem('firstname'),
            lastname: localStorage.getItem('email'),
        });
        //document.title = `Welcome, ${this.state.username} !!`;

    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;
    }

    render(){
        if(this.state.username){
            console.log('YES 2')
            return(
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        <table className="table table-striped">
                        <tr>
                            <td>Firstname</td>
                            <td>{this.state.firstname}</td>
                        </tr>
                        <tr>
                            <td>Lastname</td>
                            <td>{this.state.lastname}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>{this.state.username}</td>
                        </tr>

                        </table>
                        <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => this.props.handleLogout(this.state)}>
                            Logout
                        </button>
                    </div>
                </div>
            )
        }
        else{
            return(
                <Redirect to="/login" />
            )
        }

    }
}

export default Welcome;