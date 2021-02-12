import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';
import { Link } from "react-router-dom";

export default class Viewport3 extends Component {
    render(){
        let streamHeight = 450;
        let streamWidth = 800;

        let url = window.location.pathname;
        let streams = url.split('/')
        let stream_1 = streams[3];
        let stream_2 = streams[4];
        


        let url_1 = "https://player.twitch.tv/?channel=" + stream_1 + "&parent=localhost";
        let url_2 = "https://player.twitch.tv/?channel=" + stream_2 + "&parent=localhost";

        // if (url_1 == null) return("");

    return (
            <Spring
                from={{ opacity: 1, marginTop: 0}}
                to={{ opacity: 1, marginTop: 0}}
                >
                    { props => (
                        <div style={props}>
                            <div style={viewport2Style}>
                                <iframe class='embeded'
                                    src={url_1}
                                    height={streamHeight}
                                    width={streamWidth}
                                    frameborder="0"
                                    allowfullscreen="true">
                                </iframe>
                                <iframe class='embeded'
                                    src={url_2}
                                    height={streamHeight}
                                    width={streamWidth}
                                    frameborder="0"
                                    allowfullscreen="true">
                                </iframe>
                            </div>
                        </div>
                    )}
            </Spring>

        )
    }
}

const viewport2Style = {
    //if vw > vh switch min to vh
    //if vw < vh switch min to vw
    //ratio constant 16:9
    // float: 'left',
    // position: 'relative',
    // marginRight: '3px',
    // marginBottom: '3px',
}
