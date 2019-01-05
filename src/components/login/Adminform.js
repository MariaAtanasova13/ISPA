import {Link} from 'react-router-dom';
import React, {Component} from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Paper, Tabs, Tab} from 'material-ui';
import {auth, db} from '../../firebase';
import index from './index';
import * as firebase from 'firebase';
import {componentDidMount} from 'react-lifecycle-hoc';
import * as Routes from "../constants/Routes";
import Shop from "../shop/Shop";
import _firebase from "firebase";
import {Redirect} from 'react-router-dom';
import {storage} from "../../firebase/firebase";


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class Adminform extends Component {

    isAuthenticated() {                              //authorization firebase.auth().currentUser.email
        const token = localStorage.getItem('authToken_');
        return token;
        console.log(" token: " + token);
    }

    //Add elements

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            imge: null,
            url: '',
            price: '',
            nameArr: [],
            img: [],
            prices: [],
            descriptionArr: [],
            id: [],
            television: [],
            loading: '',
            messages: [],
            progress: 0,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value,});
    }

    handleDescChange(event) {
        this.setState({description: event.target.value,});
    }

    handleImgChange = e => {
        if (e.target.files[0]) {
            const imge = e.target.files[0];
            this.setState(() => ({imge}));

        }
    }

    handlePriceChange(event) {
        this.setState({price: event.target.value,});

    }


    handleUpload = () => {
        const {imge} = this.state;
        const uploadTask = storage.ref('images/' + imge.name).put(imge);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({progress});
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref('images').child(imge.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({url});

                })

            });
    }


    handleSubmit(event) {


        const rootRef = firebase.database();
        const post = rootRef.ref('television');
        var data = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            img: this.state.url,
        }

        post.push(data);
        event.preventDefault()
    }


// edit

    /*componentDidMount() {

        const rootRef = firebase.database().ref();
        const post = rootRef.child('television').orderByKey();


        post.once('value', snap => {
            snap.forEach(child => {
                this.setState({
                    id: this.state.id.concat([child.key]),
                    nameArr: this.state.nameArr.concat([child.val().name]),
                    img: this.state.img.concat([child.val().img]),
                    prices: this.state.price.concat([child.val().prices]),
                    descriptionArr: this.state.descriptionArr.concat([child.val().description])
                });
                const id = this.state.id;

                const postList = this.state.id.map((dataList, index) =>
                    <form onSubmit={this.handleRemove}>
                        <div className='row'>
                            <div class="col-md-4 col-lg-4">
                                <h1>{this.state.nameArr[index]}</h1>
                            </div>
                            <div class="col-md-4 col-lg-4">
                                <h1>{this.state.id[index]}</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div class="col-md-4 col-lg-4">
                                <img src={this.state.img[index]} height={200} />
                            </div>
                            <div class="col-md-8 col-lg-8">
                                <br />
                                {this.state.descriptionArr[index]}
                                <br />
                                <h3>{this.state.prices[index]}</h3>
                            </div>
                        </div>
                        <button className="buttonl" type='submit' onClick={  console.log(" key: " + this.state.id)}>
                            <div className="centered">Delete</div>
                        </button>
                    </form>
                );
                this.setState({
                    post: postList
                });
            });
        });
    }*/
    componentWillMount() {
        /* Create reference to messages in Firebase Database */
        const rootRef = firebase.database().ref();
        const element = rootRef.child('television');
        let _this = this;
        element.on('value', function (snapshot) {
            console.log(snapshot.val());

            _this.setState({
                television: snapshot.val(),
                loading: false
            });
        });
    }

    handleRemove() {
        const rootRef = firebase.database().ref();
        const element = rootRef.child('television').orderByKey();
        element.on('child_removed', snapshot => {
            /* Update React state when message is added at Firebase Database */
            let message = {id: snapshot.key};
            this.setState({messages: [message].concat(this.state.messages)});
            console.log(" key: " + message);


        })

    }

    render() {
        const isAlreadyAuthenticated = this.isAuthenticated(); //authorization

        console.log(" token: " + isAlreadyAuthenticated);
        if (this.props.loading) {
            return (
                <div>
                    Loading…
                </div>
            );
        }


        return (
            <div className="containershop">
                {isAlreadyAuthenticated ? <Redirect to={{pathname: '/admin'}}/> : (<div>
                    <h3 className="textcenter">Въведете данни за продукт</h3>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div class="col-md-6 col-lg-6">

                                <label>
                                    Име:
                                    <input type="text" value={this.state.name}
                                           onChange={this.handleNameChange.bind(this)}/>
                                </label>
                            </div>
                            <div class="col-md-6 col-lg-6">

                                <label>
                                    Цена:
                                    <input type="text" value={this.state.price}
                                           onChange={this.handlePriceChange.bind(this)}/>
                                </label>
                            </div>

                        </div>
                        <br/>
                        <div className="row">
                            <div class="col-md-6 col-lg-6">

                                <label>Снимка:</label>
                                <br/>
                                <img src={this.state.url || "https://via.placeholder.com/300x200"} alt="Uploaded images"
                                     height={200}/>
                            </div>
                            <div class="col-md-6 col-lg-6">
                                <br/>
                                <input type="file" onChange={this.handleImgChange.bind(this)}/>
                                <br/>
                                <progress value={this.state.progress} max="100"/>
                                <br/>

                                <button onClick={this.handleUpload}>Upload</button>
                            </div>
                        </div>
                        <br/>
                        <label className="descriptstile">
                            Описание:
                            <textarea className="textbox" value={this.state.description}
                                      onChange={this.handleDescChange.bind(this)}
                            />
                        </label>
                        <br/>

                        <input type="submit" value="Submit"/>
                    </form>
                    <div>
                        {this.props.children && React.cloneElement(this.props.children, {
                            firebaseRef: firebase.database().ref().child('television'),
                            television: this.state.television,
                            loading: this.state.loading
                        })}
                    </div>

                </div>)}

            </div>
        );
    }
}

export default Adminform;