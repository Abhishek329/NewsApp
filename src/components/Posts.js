import React from 'react';
import { List,Card, Spin } from 'antd';
import { Link } from 'react-router-dom';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

const Posts = ({newsPosts,loading}) =>{
    if(loading){
        return <div className="loadingSpinner">
                    <Spin />
                </div>
    }
    const { Meta } = Card;
    const altImageUrl='https://freexiyuewang.com/wp-content/uploads/2019/08/bloomberg-logo.jpg'
    
    // return <ul className="list-group mb-4">
    //     {newsPosts.map((newsPost,index) =>(
    //         <li key ={index} className="list-group-item">
    //             {newsPost.title}
    //             </li>
    //     ))}

    // </ul>

   return <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={newsPosts}
    renderItem={item => (
      <List.Item>
        <Card 
         hoverable
         style={{ width: 240 }}
         cover={
         <img alt={item.author} src={item.urlToImage ? item.urlToImage : altImageUrl } />}
        >
        <Link to="./CardDetails"><Meta title={item.title} description={item.description} />
        </Link>
        </Card>
      </List.Item>
    )}
  />
}


export default Posts;