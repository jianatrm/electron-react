import React, {useState,Component} from 'react';
import './footerPage.less'
import {Col, Row} from "antd";
import { Avatar } from 'antd';
import {createFromIconfontCN} from "@ant-design/icons";
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1692651_odquo6zlpxg.js'
});
const iconfontStyle = {cursor:'pointer',color:'red'}
export default function FooterPage(props){
    const [musicName,setMusicName] = useState("童话镇");
    const [openMusic,setOpenMusic] = useState(false);

    return (
        <div>
            <Row gutter={0} className="footercontainer">
                <Col span={8} className="footer-left">
                    <Avatar size={40} shape="square" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584280649649&di=e32bea1566b740b6f64ae0512617900b&imgtype=jpg&
                        src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2226330052%2C3269746828%26fm%3D214%26gp%3D0.jpg"></Avatar>
                    <div className="footer-left-music">
                        <p>{musicName}</p>
                        <p>{musicName}</p>
                    </div>
                </Col>
                <Col span={8} className="footer-middle">
                    <IconFont style={iconfontStyle} type="icon-xin"/>
                    <IconFont style={iconfontStyle} type="icon-shangyiqu"/>
                    {
                        openMusic?<IconFont className="stop" style={iconfontStyle} type="icon-zanting"  onClick={()=>setOpenMusic(false)}/>
                        :<IconFont className="stop" style={iconfontStyle} type="icon-bofang" onClick={()=>setOpenMusic(true)}/>
                    }
                    
                    <IconFont style={iconfontStyle} type="icon-xiayiqu"/>
                </Col>
                <Col span={8} className="Col">
            
                </Col>
            </Row>
        </div>
    );
}


