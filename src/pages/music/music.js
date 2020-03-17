import React, {Component} from 'react';
import { Carousel } from 'antd';
import './music.less'
class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swipper:[
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2714405176,1727962441&fm=26&gp=0.jpg",
                "https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1584879527&t=2c34cc3ef8da792d7aa67a0e8592021d",
                "https://t9.baidu.com/it/u=86853839,3576305254&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1584879527&t=9cdbf6b1916996eaa25c4b4e790c7c1b",
                "https://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1584879527&t=f6e69c471309cc3dc1016af5edc4ad8c"
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="swipper">
                    <Carousel  className="swipper-container">

                        {this.state.swipper.map(item=>(
                            <div>
                                <img src={item}/>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Music;
