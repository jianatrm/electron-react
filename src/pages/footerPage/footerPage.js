import React, {Component} from 'react';
import './footerPage.less'
import {Col, Row} from "antd";
import { Avatar } from 'antd';
import {createFromIconfontCN} from "@ant-design/icons";
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1692651_odquo6zlpxg.js'
});
const iconfontStyle = {cursor:'pointer',color:'red'}
class FooterPage extends Component{

   constructor(props){
       super(props)
       this.state = {
           musicName:'关山酒',
           openMusic:false
       }
       this.audio = React.createRef();
   }
   componentDidMount() {

   }
    closeMusic(){
       this.setState({
           openMusic:false
       })
        this.audio.current.pause()
    }
    openMusic(){
        this.setState({
            openMusic:true
        })
        this.audio.current.play()
    }
    render(){
       return (
           <div>
               <Row gutter={0} className="footercontainer">
                   <Col span={8} className="footer-left">
                       <Avatar size={40} shape="square" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584280649649&di=e32bea1566b740b6f64ae0512617900b&imgtype=jpg&
                        src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2226330052%2C3269746828%26fm%3D214%26gp%3D0.jpg"></Avatar>
                       <div className="footer-left-music">
                           <p>{this.state.musicName}</p>
                           <p>{this.state.musicName}</p>
                       </div>
                   </Col>
                   <Col span={8} className="footer-middle">
                       <IconFont style={iconfontStyle} type="icon-xin"/>
                       <IconFont style={iconfontStyle} type="icon-shangyiqu"/>
                       {
                           this.state.openMusic?<IconFont className="stop" style={iconfontStyle} type="icon-zanting"  onClick={()=> this.closeMusic()}/>
                               :<IconFont className="stop" style={iconfontStyle} type="icon-bofang" onClick={()=> this.openMusic()}/>
                       }

                       <IconFont style={iconfontStyle} type="icon-xiayiqu"/>
                   </Col>
                   <Col span={8} className="Col">
                       <audio id="audio"  crossOrigin="anonymous" ref={this.audio} src="http://m10.music.126.net/20200318154929/d51f6fa50fc339ee30a1d11371c49beb/ymusic/5409/5158/025b/cc5945120af2295af4f051f44fc9981d.mp3"></audio>
                   </Col>
               </Row>
           </div>
       )
   }

}
export default FooterPage


