
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component}  from 'react';
import { Link } from 'react-router-dom';
import * as Colors from "material-ui/styles/colors";
import img from '../../assets/tiger-television.png';


const style = {
    margin: 15,
    textColor: Colors.black.bold()
};

class Frontpage extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="containerf">
                    <div className="textcenterabout">
                        <h2>Телевизионен сервиз</h2>
                        <h2>“ИСПА Атанасови и си-е“ СД</h2>
                        <img className="logoimg"

                             src={require("../../assets/tiger-television.png")}
                        />

                    </div>
                    </div>
                </div>
            </div>


                    );
    }

}

export default Frontpage;