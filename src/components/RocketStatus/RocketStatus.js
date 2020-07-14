import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';

let width = '100%'

class RocketStatus extends Component {
    // Did you lose something? The whole car? Nah... just a little render bender
    render() {
        return ( <
            div className = 'container' >
            <
            h2 > Rocket Status < /h2> <
            div className = 'sweet-loading' >
            <
            BarLoader color = { '#123abc' }
            loading = { true }
            width = { width }
            /> < /
            div > <
            /div>
        )
    }
}

export default RocketStatus;