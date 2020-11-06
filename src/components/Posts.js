import React from 'react';
import { List,Card, Spin } from 'antd';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

const Posts = ({newsPosts,loading}) =>{
    if(loading){
        return <div className="loadingSpinner">
                    <Spin />
                </div>
    }
    const { Meta } = Card;
    
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
         <img alt="example" src={item.urlToImage} />}
        ><Meta title={item.title} description={item.description} />
        </Card>
      </List.Item>
    )}
  />
}


export default Posts;