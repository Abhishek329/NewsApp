
import React from 'react';
//import axios from 'axios';
import './App.css';
import { Layout, Menu } from 'antd';
import Home from './components/Home';
import { BrowserRouter,Link, Route,Switch } from 'react-router-dom';
import BloombergPosts from './components/BloombergPosts';
import CnnPosts from './components/CnnPosts';

const { Header, Content, Footer } = Layout;

class App extends React.Component{
  
  setUrlParams =null;
  constructor(props){
    super(props);
    this.state = {
        data: this.setUrlParams
    }
  }

  onClickLink(input) {
    this.setUrlParams = input;
  }

    render() {
      const {data}= this.state;
      return(
        <BrowserRouter>
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="./Home" >Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="./BloombergPosts">Bloomberg News</Link></Menu.Item>
            <Menu.Item key="3"><Link to="./CnnPosts">CNN</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Switch>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Route path="/Home">
          <Home dataParentToChild ={data}></Home>
          </Route>
          <Route path="/BloombergPosts">
          <BloombergPosts/>
          </Route>
          <Route path="/CnnPosts">
          <CnnPosts/>
          </Route>
        </div>
        </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Global News</Footer>
      </Layout>
      </BrowserRouter>
      )
          
    }
}

export default App;
