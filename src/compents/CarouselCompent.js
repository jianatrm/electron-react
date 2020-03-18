import React, {Component} from 'react';
import './CarouselCompent.less'
import list from "less/lib/less/functions/list";

class CarouselCompent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            list: [
                "http://p1.music.126.net/dRFPHXqpn212cEKLkDkN0A==/109951164812887729.jpg?imageView&quality=89",
                "http://p1.music.126.net/c4WHyY_n5aoxwrEDqsxb-Q==/109951164813876580.jpg?imageView&quality=89",
                "http://p1.music.126.net/Vz4j3NfQ1D-qBCuh2ckDKQ==/109951164813535529.jpg?imageView&quality=89",
                /*"http://p1.music.126.net/Pcv37iPUHgehP4Bhk6TS5Q==/109951164813070944.jpg?imageView&quality=89",
                "http://p1.music.126.net/ocVk3WVZPVw2T13B1F_ogw==/109951164812860219.jpg?imageView&quality=89",
                "http://p1.music.126.net/I_LtsEN94b6Ri0xc3kki8A==/109951164809231313.jpg?imageView&quality=89",*/
            ]
        }
        this.ul = React.createRef()
    }
    componentDidMount() {
        setInterval(()=>{
            this.revseList()
        },3000)
    }
    revseList = ()=>{
        let children = this.ul.current.children;
        let classNameList = []
        for (let i =0;i<children.length;i++){
            classNameList.push(children[i].className)
        }
        classNameList.unshift(classNameList[classNameList.length-1])
        classNameList.pop()
        for (let i =0;i<classNameList.length;i++){
            children[i].className =classNameList[i]
        }
    }

    render() {
        return (
            <div>
                <div className="carousel">
                    <ul ref={this.ul}>
                        {this.state.list.map((item,index) => (
                            <li key={index} className={'carli'+index}><img src={item}/></li>
                        ))}
                    </ul>
                </div>
                <div className="banner"></div>
            </div>
        )
    }


    ;
}

export default CarouselCompent;
