import React, {Component} from 'react';
import { Input } from 'antd';
import { Row, Col } from 'antd';
import { UserOutlined ,SettingOutlined,createFromIconfontCN} from '@ant-design/icons'
import './index.less'
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

class Index extends Component {
    render() {
        return (
            <Row gutter={0} className="headercontainer">
                <Col span={4} className="Col"></Col>
                <Col span={4} className="Col"></Col>
                <Col span={4} className="Col"></Col>
                <Col span={4} className="Col"></Col>
                <Col span={4} className="Col">
                    <Input placeholder="搜索" size='small'/>
                </Col>
                <Col span={4} className="Col">
                    <ul>
                        <li><SettingOutlined></SettingOutlined></li>
                        <li><UserOutlined></UserOutlined></li>
                        <li><IconFont type="icon-pifu"></IconFont></li>
                        <li><IconFont type="icon-fangda"></IconFont></li>
                    </ul>
                </Col>
            </Row>
        );
    }
}

export default Index;
