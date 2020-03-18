import React, {Component} from 'react';
import './music.less'
import CarouselCompent from "../../compents/CarouselCompent";
class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
               <CarouselCompent/>
            </div>
        );
    }
}

export default Music;
