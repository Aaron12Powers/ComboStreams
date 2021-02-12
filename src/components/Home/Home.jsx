import React, {Component} from 'react';
import '../../assets/css/ComboStreams.css';
import './Resources/images/hamburger.svg';

import DefaultViewports from '../DefaultViewports';

import Viewport2 from '../Viewport3';


import {copyToClipBoard} from '../../module';

import { Link } from "react-router-dom";



document.title = 'ComboStreams'


export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    

    render() {
        return (
            <div>
                <div class='mainDiv'>
                    <div class="slider"></div>
                    
                    <header class="header">
                        <button class="addStream" href="/FAQ">Add Stream</button>
                        ComboStreams.com
                        <button class="FAQ"><Link to="/FAQ">FAQ</Link></button>
                    </header>

                    <body class="mainBody">
                        <body class="landingPageMain"> 
                            Welcome To ComboStreams.com!
                            To start watching streams, update your url 
                            (ex. www.combostreams.com/t/xqcow/y/test) or click the 
                            'Start Watching' button in the top left!
                            Hit the FAQ Button on the top right if you have any issues!
                        </body>
                    </body>
                </div>
                <div class='footer'/>
            </div>
        );
    }
}

