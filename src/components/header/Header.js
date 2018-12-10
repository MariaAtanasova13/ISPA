import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import SignOutButton from '../SingOut';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {lightGreen700, black} from 'material-ui/styles/colors';



const Header = ({ authUser }) =>
    <div>
        { authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </div>

const NavigationAuth = () =>
    <ul className="navbar navbar-inverse" >
        <div className="navbar-header">
            <a className="navbar-brand">ИСПА</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li><a className="active" href="/"><span className="glyphicon glyphicon-home"></span>Home</a></li>
                <li><a href="/about">За нас</a></li>
                <li><a href="/contact">Контакти</a></li>
                <li><a href="/services">Услуги</a></li>
                <li><a href="/shop">Магазин</a></li>
                <li><a href="/adminform">Админ</a></li>
                <li><SignOutButton /></li>
            </ul>
        </div>
    </ul>

const NavigationNonAuth = () =>
    <ul className="navbar navbar-inverse" >
        <div className="navbar-header">
            <a className="navbar-brand">ИСПА</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li><a className="active" href="/"><span className="glyphicon glyphicon-home"></span>Home</a></li>
                <li><a href="/about">За нас</a></li>
                <li><a href="/contact">Контакти</a></li>
                <li><a href="/services">Услуги</a></li>
                <li><a href="/shop">Магазин</a></li>
            </ul>
        </div>
    </ul>

export default Header;


