import React,{Component} from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import { Paper,Tabs,Tab } from 'material-ui';
import { db } from '../../firebase';
import * as firebase from 'firebase';
import { componentDidMount } from 'react-lifecycle-hoc';


class Shop extends Component{


    constructor() {
        super();


        this.state = {
            name: [],
            img: [],
            price:[],
            description:[],
            id:[],
            television:'',
        };
    }

    componentDidMount() {

        const rootRef = firebase.database().ref();
        const post = rootRef.child('television').orderByKey();

        post.once('value', snap => {
            snap.forEach(child => {
                this.setState({
                    id: this.state.id.concat([child.key]),
                    name: this.state.name.concat([child.val().name]),
                    img: this.state.img.concat([child.val().img]),
                    price: this.state.price.concat([child.val().price]),
                    description: this.state.description.concat([child.val().description])
                });

                const postList = this.state.id.map((dataList, index) =>
                    <form >
                        <div className='row'>
                            <div class="col-md-4 col-lg-4">
                                <h1>{this.state.name[index]}</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div class="col-md-4 col-lg-4">
                                <img src={this.state.img[index]} height={200} />
                            </div>
                            <div class="col-md-8 col-lg-8">
                                <br />
                                {this.state.description[index]}
                                <br />
                                <h3>{this.state.price[index]}</h3>
                            </div>
                        </div>

                    </form>

                );

                this.setState({
                    post: postList
                });
            });
        });
    }


    render(){

        return(
            <div className="containerf" >
                <ul>{this.state.post}</ul>
            </div>
        );
    }

}

export default Shop;