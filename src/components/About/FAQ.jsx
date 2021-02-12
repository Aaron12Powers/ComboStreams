import React, {Component} from 'react';
import '../../assets/css/ComboStreams.css';
import '../../Resources/images/hamburger.svg';

import Viewports from '../DefaultViewports';


import { Link } from "react-router-dom";


document.title = 'FAQ'

export default class FAQ extends Component{
    constructor(props) {
        super(props);
        this.state = {};

        var count = 0;
    }

    
    
    render() {
        return (
            <div >
                <div class='mainDiv'>
                    <div class="slider"></div>

                    <header class="header">
                        Combo Stream
                    </header>
                    <nav>
                        
                    </nav>

                    <ribbon>
                        <li class="pagename" >                               
                            Frequently Asked Questions
                        </li>
                    </ribbon>

                    <div>
                        <body>
                            <h1 class="question">Q</h1>
                            <p class="answer">test</p>
                            <h1 class="question">Q</h1>
                            <p class="answer">test</p>

                        </body>
                    </div>
                </div>
                
                    <div class='footer'>
                        <nav>
                        </nav>
                    </div>
            </div>
        );
    }
}



