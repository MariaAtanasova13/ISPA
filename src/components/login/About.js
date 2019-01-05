import React, {Component} from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {lightGreen900} from "material-ui/styles/colors";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';

const style = {
    backgroundImage: "src/components/login/img/desk_wooden.jpg"
}

class About extends Component {

    render() {
        return (

            <div className="row">
                <div className="col-lg-2"/>
                <div className="col-lg-8">
                    <div className="screenabout">
                        <h2 className="textcenter">“ИСПА Атанасови и си-е“ СД</h2>
                        <h5>Фирмата е създадена през 1990 година в град Пловдив.
                            Основен предмет на дейност е търговия с резервни части, както и
                            сервиз за телевизори, аудио и видео техника.</h5>
                        <h5> Предлагаме на клиентите си голямо разнообразие от резервни части и
                            консумативи за аудио и видео техника, телевизори, настолни и преносими компютри,
                            GSM, таблети, електродомакински уреди и всякакви други електронни уреди.
                        </h5>

                    </div>
                </div>
                <div className="col-lg-2"/>


            </div>
        );
    }

}

export default About;