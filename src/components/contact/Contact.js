
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component}  from 'react';
import { Link } from 'react-router-dom';
import * as Colors from "material-ui/styles/colors";
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import GoogleMapReact from 'google-map-react';

const style = {
    margin: 15,
    textColor: Colors.white.bold()
};

class Contact extends Component {


    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { { lat: 42.131204, lng: 24.706781 } }
                defaultZoom = { 14 }

            >

            </GoogleMap>
        ));

        return(
                <div>
                    <div className="row">
                        <div className="containercontact">
                        <h2 class="textcenter">Контакти</h2>
                        <section id="contactOrder">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-3 col-lg-3">
                                        <div class="container-fluid bg-grey">
                                            <div class="row">
                                                <p><span class="glyphicon glyphicon-map-marker"></span> Пловдив, България, ул.
                                                    “Сеновец“
                                                    №9</p>
                                                <p><span class="glyphicon glyphicon-phone"></span> 088 279 3345</p>
                                                <p><span class="glyphicon glyphicon-envelope"></span> sasho_atanasov@abv.bg</p>
                                                <h5>работно време: понеделник до петък - 9:00 до 18:30 </h5>
                                                <h5> събота и неделя -10:00 до 17:30 </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <GoogleMapExample
                                            containerElement={ <div style={{ height: `400px`, width: '90%' }} /> }
                                            mapElement={ <div style={{ height: `100%` }} /> }

                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        </div>
                    </div>
                </div>

        );
    }

}

export default Contact;