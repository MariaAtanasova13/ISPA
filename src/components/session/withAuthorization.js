import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../../firebase/context';
import AuthUserContext from './AuthUserContext';
import { firebase } from '../../firebase';
import * as Routes from '../constants/Routes';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(Routes.SIGN_IN);
                    }
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <Component {...this.props} />
            );
        }

    }
    return compose(
        withRouter
    )(WithAuthorization);
}
export default withAuthorization;
