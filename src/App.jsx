
const config = require('../config');

import React from 'react';
import NavBar from './layout/NavBar.jsx';

import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';

import { BrowserRouter as Router } from 'react-router-dom';
import RoutesList from './RoutesList.jsx';

let MixClient = require('mix-api').MixClient;

export default class App extends React.Component {

    constructor(){

        super();

        this.mixClient = null;

        try{

            // The LinkClient will try various methods of connecting to a blockchain network
            this.mixClient = new MixClient();

        }catch(err){

            console.error(err.message);

        }

    }

    render() {

        return (

            <Router>

                <div className="site-content">

                    <Header linkClient={this.mixClient}></Header>

                    <div className="content-main">

                        <Navleft className="hidden-sm hidden-xs"></Navleft>

                        <div className="content-middle">

                            <RoutesList linkClient={this.mixClient}/>
                            <Footer></Footer>

                        </div>

                    </div>

                </div>

            </Router>

            );

        }


}