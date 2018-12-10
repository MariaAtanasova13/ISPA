import {Component} from "react";
import React from "react";
import * as firebase from 'firebase';
import { componentDidMount } from 'react-lifecycle-hoc';


class Index extends Component {
    constructor() {
        super();

        // Initialize Firebase
    }

    componentWillMount() {

  let postsRef = firebase.database().ref('posts');

        let _this = this;

        postsRef.on('value', function (snapshot) {
            console.log(snapshot.val());

            _this.setState({
                posts: snapshot.val(),
                loading: false
            });
        });
    }

    render() {
        return (
            <div className="App">
                {this.props.children && React.cloneElement(this.props.children,{
                    firebaseRef: firebase.database().ref().child('television'),
                    television: this.state.television,
                    loading: this.state.loading
                })}
            </div>
        );
    }
}
export default Index;