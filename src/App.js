import React, {Component} from 'react';
import Header from './components/header/Header';
import Frontpage from './components/frontpage/Frontpage';
import Shop from "./components/shop/Shop";
import About from './components/login/About';
import Admin from "./components/login/Admin";
import Services from "./components/services/Services";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Contact from "./components/contact/Contact";
import  './App.css';
import  { app } from './firebase/firebase';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Adminform from "./components/login/Adminform";
import { componentDidMount } from 'react-lifecycle-hoc';
import { firebase } from './firebase';
import Homep from './components/login/Homep';




const routes = [
    {
        path:'/',
        exact:true,
        middle: () => <Frontpage/>
    },
    {
        path:'/about',
        exact:true,
        middle: () => <About/>
    },
    {
        path:'/contact',
        exact:true,
        middle: () => <Contact/>
    },

    {
        path:'/services',
        exact:true,
        middle: () => <Services/>
    },
    {
        path:'/shop',
        exact:true,
        middle: () => <Shop/>
    },
    {
    path:'/admin',
    exact:true,
    middle: () => <Admin/>
    },
    {
        path:'/homep',
        exact:true,
        middle: () => <Homep/>
    },
    {
    path:'/adminform',
    exact:true,
    middle: () => <Adminform/>
    }
]



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState(() => ({ authUser }))
                : this.setState(() => ({ authUser: null }));
        });
    }


    render() {
        return (
            <MuiThemeProvider>
                <div>
                <Router>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Header authUser={this.state.authUser} />
                                {routes.map((route, i) =>
                                    <Route
                                        key={i}
                                        path={route.path}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                {routes.map((route, i) =>
                                    <Route
                                        key={i}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.left}
                                    />
                                )}
                            </div>
                            <div className="col-md-4">
                                {routes.map((route, i) =>
                                    <Route
                                        key={i}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.right}
                                    />
                                )}
                            </div>
                            <div className="col-md-12">
                                {routes.map((route, i) =>
                                    <Route
                                        key={i}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.middle}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                </Router>
                </div>
            </MuiThemeProvider>

        );
    }
}

export default (App);
