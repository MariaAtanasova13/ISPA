import { Link } from 'react-router-dom';
import React,{Component} from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Paper,Tabs,Tab } from 'material-ui';
import {auth, db} from '../../firebase';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import index from './index';
import * as firebase from 'firebase';
import { componentDidMount } from 'react-lifecycle-hoc';
import * as Routes from "../constants/Routes";
import Shop from "../shop/Shop";
import _firebase from "firebase";



const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class Adminform extends Component{

    //Add elements

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            imge: '',
            price:'',
            nameArr: [],
            img: [],
            prices:[],
            descriptionArr:[],
            id:[],
            television:[],
            loading:'',
            messages: []
        };



        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);


    }
    handleNameChange(event) {
        this.setState({name: event.target.value,});
    }

    handleDescChange(event) {
        this.setState({description: event.target.value,});
    }

    handleImgChange(event) {
        this.setState({imge: event.target.value,});
    }

    handlePriceChange(event){
        this.setState({price: event.target.value,});

    }

    handleSubmit(event) {
        const rootRef = firebase.database();
        const post = rootRef.ref('television');
        var data ={
            name:this.state.name,
            description:this.state.description,
            img:this.state.imge,
            price:this.state.price,
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
    componentWillMount(){
        /* Create reference to messages in Firebase Database */
        const rootRef = firebase.database().ref();
        const element = rootRef.child('television');
        let _this = this;
        element.on('value', function(snapshot){
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
            let message = { id: snapshot.key };
            this.setState({ messages: [message].concat(this.state.messages) });
            console.log(" key: " + message);


        })




    }




    render(){

        if (this.props.loading) {
            return (
                <div>
                    Loading…
                </div>
            );
        }

        return(
            <div className="containerf" >
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Име:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                    </label>
                    <label>
                        Снимка:
                        <input type="text" value={this.state.imge} onChange={this.handleImgChange.bind(this)} />
                    </label>
                    <label className="descriptstile">
                        Описание:
                        <input type="text" value={this.state.description} onChange={this.handleDescChange.bind(this)} />
                    </label>
                    <label>
                        Цена:
                        <input type="text" value={this.state.price} onChange={this.handlePriceChange.bind(this)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className="containerf" >
                    <div>
                        {this.props.children && React.cloneElement(this.props.children,{
                        firebaseRef: firebase.database().ref().child('television'),
                        television: this.state.television,
                        loading: this.state.loading
                    })}
                    </div>
                </div>


            </div>
        );
    }

}

export default Adminform;