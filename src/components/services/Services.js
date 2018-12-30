import React,{Component} from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

const style ={
    backgroundImage: "src/components/login/img/desk_wooden.jpg"
}

class Services extends Component{

    render(){
        return(
            <div className="containerf">
                <h1>Услуги</h1>
                <table>
                    <tr>
                        <th id="myTh">Name</th>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>John</td>
                    </tr>
                </table>

           </div>
        );
    }

}
export default Services;