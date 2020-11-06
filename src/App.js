
import React from 'react';
//import axios from 'axios';
import './App.css';
import { Layout, Menu } from 'antd';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';

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
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><a href="./Home" >Home</a></Menu.Item>
            <Menu.Item key="2"><a onClick={this.onClickLink('bloomberg.com')}>Bloomberg News</a></Menu.Item>
            <Menu.Item key="3">CNN</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Home dataParentToChild ={data}></Home> 
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Global News</Footer>
      </Layout>
      </BrowserRouter>
      )
          
    }
}


export default App;
