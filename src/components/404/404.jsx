import React, {Component} from 'react';
import '../../assets/css/ComboStreams.css';
import '../../Resources/images/hamburger.svg';

import DefaultViewports from '../DefaultViewports';

import { Link } from "react-router-dom";


document.title = 'Page Not Found'

export default class NotFoundPage extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    
    render() {
        return (
            <div class='mainDiv'>
                <div class="slider"></div>
                    <header class="header">
                        <button class="startWatching">Start Watching</button>
                        ComboStreams.com
                        <button class="FAQ">FAQ</button>
                    </header>
                <ribbon>
                    <li class="pagename">    
                        Page not found, 
                        Please click <Link to="/">HERE</Link> or the logo in the top right to return to the main page. 
                        Or use the dropdown on the left for other aspects of the site! 
                    </li>
                </ribbon>
            </div>
        );
    }
}



