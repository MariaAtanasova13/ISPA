import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import{ Redirect} from 'react-router-dom'
import { Toaster, Intent} from '@blueprintjs/core'
import {auth, firebase} from '../../firebase';
import * as Routes from '../constants/Routes';


const SignInPage = ({ history }) =>
    <div>
        <Login history={history} />
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class Login extends Component {
    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
        this.state = {
            redirect: false
        }
    }


    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then((result) => {
                this.setState(() => ({ ...INITIAL_STATE }));


                let afterLogin = Routes.HOME;
                if(result.email === 'admin@abv.bg'){
                    afterLogin = Routes.ADMIN
                }
                history.push(afterLogin);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }



    render() {

        if (this.state.redirect === true){
            return<Redirect to= '/' />
        }

        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';


        return (
            <div>
                <div className="row">
                    <header className="header">
                        <h1>Login</h1>
                    </header>
                    <div className="col-lg-3"/>
                    <form onSubmit={this.onSubmit}>
                        <div className="col-lg-6" >
                                <div className="text-center" >

                                        <Toaster ref={(element) => { this.toaster = element }} />
                                        <br/>
                                        <input className="inputform"
                                               value={email}
                                               type="text"
                                               placeholder="Enter your email"
                                               onChange={event => this.setState(byPropKey('email', event.target.value))}  />
                                        <br/>

                                        <input className="inputform"
                                               value={password}
                                               onChange={event => this.setState(byPropKey('password', event.target.value))}
                                               type="password"
                                               placeholder="Enter your password" />
                                </div>

                                <button className="buttonl"
                                        disabled={isInvalid} type="submit">
                                    <div className="centered">Submit</div>
                                </button>
                         </div>
                        </form>



                            <div className="col-lg-3"/>
                    { error && <p>{error.message}</p> }
                </div>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default withRouter(SignInPage);

export {
    Login,
};