import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './Posts';
//import Pagination from './components/Pagination';
import { Pagination } from 'antd';



const BloombergPosts = () =>{


    const [bloombergPosts,setBloombergPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentBloombergPage,setCurrentBloombergPage] = useState(1);
    const [newsPostsPerPage] = useState(10);
  
    useEffect(() =>{
      const getBloombergPosts = async () =>{
        setLoading(true);
        const res = await axios.get('https://newsapi.org/v2/everything?domains=bloomberg.com&language=en&pageSize=100&apiKey=c8fbc66687ed4ac6b007b3244da6af98');
        setBloombergPosts(res.data.articles);
        setLoading(false);
      } 
  
      getBloombergPosts();
    },[])
  
    const indexOfLastPost = currentBloombergPage * newsPostsPerPage;
    const indexOfFirstPost = indexOfLastPost - newsPostsPerPage;
    const currentPosts = bloombergPosts.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = pageNumber => setCurrentBloombergPage(pageNumber);
  

    return (
        <div className ="container mt-5">
          <h1 className="text-primary mb-3">All News</h1>
          <Posts newsPosts={currentPosts} loading={loading}></Posts>
          {/* <Pagination newsPostsPerPage={newsPostsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination> */}
          <Pagination onChange={paginate} defaultCurrent={newsPostsPerPage} total={bloombergPosts.length}></Pagination>
        </div>
    );
};

export default BloombergPosts;