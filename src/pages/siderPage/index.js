import React, {Component} from 'react';
import { Avatar } from 'antd';
import './index.less'
import {Link} from "react-router-dom";
import {CaretRightFilled,createFromIconfontCN } from '@ant-design/icons'
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1692651_za34y3196jo.js'
});

const iconfontStyle={fontSize:'22px',marginRight:'10px'}
class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName:'伽那也是小象'
        }
    }
    render() {
        return (
            <div className="sidercontainer">
                <div className="title" >
                    <Avatar className="userImage" size={42} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584280649649&di=e32bea1566b740b6f64ae0512617900b&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2226330052%2C3269746828%26fm%3D214%26gp%3D0.jpg"></Avatar>
                    <p  className="userName">{this.state.userName}<CaretRightFilled /></p>
                </div>
                <ul className="siderList">
                    <li><IconFont style={iconfontStyle} type="icon-yinle1"/><span><Link to="/findmusic">发现音乐</Link></span></li>
                    <li><IconFont style={iconfontStyle} type="icon-xinhao"/><span><Link to="/personalFM">私人FM</Link></span></li>
                    <li><IconFont style={iconfontStyle} type="icon-shipin-"/><span><Link to="/video">视频</Link></span></li>
                    <li><IconFont style={iconfontStyle} type="icon-pengyou"/><span><Link to="/friends">朋友</Link></span></li>
                </ul>
                <p className="secondtitle">我的音乐</p>
                <ul className="siderList">
                    <li><IconFont style={iconfontStyle} type="icon-yinle"/><span>iTunes音乐</span></li>
                    <li><IconFont style={iconfontStyle} type="icon-xiazai"/><span>下载管理</span></li>
                    <li><IconFont style={iconfontStyle} type="icon-yun"/><span>我的音乐云盘</span></li>
                    <li><IconFont style={iconfontStyle} type="icon-shoucang"/><span>我的收藏</span></li>
                </ul>
                <p className="secondtitle createSing">
                    <span>创建歌单</span>
                    <span>
                        <IconFont style={iconfontStyle} type="icon-plus-line"/>
                    </span>

                </p>
            </div>

        )
    }
}

export default Index;
