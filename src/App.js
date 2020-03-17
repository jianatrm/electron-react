import React from 'react';
import { Switch, Route ,BrowserRouter} from 'react-router-dom';
import './App.less';
import Home from "./pages/home";
import HeaderPage from "./pages/headerPage";
import SiderPage from "./pages/siderPage";
import Music from "./pages/music/music";
import FooterPage from "./pages/footerPage/footerPage";

import {Layout} from "antd";
const { Header, Footer, Sider, Content } = Layout;

const App = () => (
    <Layout>
        <BrowserRouter>
        <Header className="header"><HeaderPage></HeaderPage></Header>
        <Layout className="layout">
            <Sider className="side"><SiderPage></SiderPage></Sider>
            <Content className="content">

                    <Switch>
                        <Route path="/findmusic" component={Music} />
                    </Switch>

            </Content>
        </Layout>
        <Footer className="footer">
            <FooterPage></FooterPage>
        </Footer>
        </BrowserRouter>
    </Layout>


);

export default App;
