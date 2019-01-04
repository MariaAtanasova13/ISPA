import React,{Component} from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

import img from '../../assets/electronic-repair.jpg';


class Services extends Component{
    render(){
        return(<div className='row'>
                <div class="col-md-4 col-lg-4">
                    <img className="img1"
                       src={require("../../assets/electronic-repair.jpg")}
                />

                </div>
            <div class="col-md-4 col-lg-4">
            <div className="containers" >

                <h1 className=" textcenters">Услуги предлагани от сервиза</h1>
                <div className="row">
                    <h4> * Диагностика и ремонт на всички марки и модели телевизорил </h4>

                    <h4> * Ремонт и продажба на дистанционни управления.</h4>

                    <h4> * Ремонт на монитори.</h4>

                    <h4> * Настройка на телевизия по домовете.</h4>

                    <h4> * Монтиране на новозакупени телевизори.</h4>

                    <h4> * Поддръжка на хотели, офиси и здравни заведения.</h4>

                    <h4> * Ремонт на компютри и лаптопи. </h4>


                    <h4> * Ремонт на аудио и видео техника и др. . </h4>


                </div>

           </div>
            </div>
            <div class="col-md-4 col-lg-4"/>
            </div>
            );
    }
}
export default Services;