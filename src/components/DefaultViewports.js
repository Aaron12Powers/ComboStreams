import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';
import { Link } from "react-router-dom";

export default class DefaultViewports extends Component {
    render(){

        let url = window.location.pathname;
        let streams = url.split('/')

        let i = 0;
        let j = 0;
        let array = [];
        let output;

        if (streams[streams.length - 1] != "") {
            streams.push(streams[0]);
        }


        let startHeight = (window.innerHeight) / Math.ceil(Math.sqrt((streams.length - 2) / 2));
        let startWidth = (window.innerWidth) / Math.ceil(Math.sqrt((streams.length - 2) / 2));
        
        startHeight = startHeight - 4;
        startWidth = startWidth - 4;

        let streamHeight = (window.innerHeight - 4) / Math.ceil(Math.sqrt((streams.length - 2) / 2));
        let streamWidth = streamHeight / 9 * 16;

        // alert('start height' + startHeight.toString())
        // alert('start width' + startWidth.toString())

        if ((startHeight / 9) >= (startWidth / 16)){
            streamHeight = startWidth / 16 * 9;
            streamWidth = startWidth;
        }
        else{
            streamWidth = startHeight / 9 * 16;
            streamHeight = startHeight;
        }

        // if startHeight 

        let urls = []
        for (i; i < streams.length - 1; i++){
            if (streams[i - 1] == "t") urls.push("https://player.twitch.tv/?channel=" + streams[i] + "&parent=localhost");
            else if (streams[i - 1] == "y") urls.push("https://www.youtube.com/embed/" + streams[i]);
        }

        for (i = 0; i < streams.length - 1; i++){
            if (streams[i] != "" && streams[i] == "t"){
            array.push(<iframe class='embeded'
                            src={urls[j]}
                            height={streamHeight}
                            width={streamWidth}
                            frameborder="0"
                            allowfullscreen="true">
                        </iframe>
                        );
                        j++;
                    }

            else if(streams[i] != "" && streams[i] == "y"){
                array.push(<iframe class='embeded'
                        src={urls[j]}
                        height={streamHeight}
                        width={streamWidth}
                        frameborder="0"
                        allowfullscreen="true">
                        </iframe>
                        );
                        j++;
            }
            
                        output = array;
        }
        if (j <= 0) { output = (<div>      
                                    <header class="header">
                                        <button class="addStream" href="/FAQ">Add Stream</button>
                                        ComboStreams.com
                                        <button class="FAQ"><Link to="/FAQ">FAQ</Link></button>
                                    </header>
                                <body class="landingPageMain"> 
                                    Welcome To ComboStreams.com!
                                    To start watching streams, update your url 
                                    (ex. www.combostreams.com/t/xqcow/y/test) or click the 
                                    'Start Watching' button in the top left!
                                    Hit the FAQ Button on the top right if you have any issues!
                                </body></div>)}
        console.log(j);
        
        

    return ( <div>
                <div class='mainDiv'>                    
                {output}
                </div>
            </div>
        )
    }
}
