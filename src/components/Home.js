import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './Posts';
//import Pagination from './components/Pagination';
import { Pagination } from 'antd';



const Home = () =>{


    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [newsPostsPerPage] = useState(10);
  
    useEffect(() =>{
      const getPosts = async () =>{
        setLoading(true);
        const res = await axios.get('https://newsapi.org/v2/everything?domains=thenextweb.com,bbc.com,businessinsider.com&pageSize=100&apiKey=c8fbc66687ed4ac6b007b3244da6af98');
        setPosts(res.data.articles);
        setLoading(false);
      } 
  
      getPosts();
    },[])
  
    const indexOfLastPost = currentPage * newsPostsPerPage;
    const indexOfFirstPost = indexOfLastPost - newsPostsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    console.log("News Posts",posts);

    return (
        <div className ="container mt-5">
          <h1 className="text-primary mb-3">All News</h1>
          <Posts newsPosts={currentPosts} loading={loading}></Posts>
          {/* <Pagination newsPostsPerPage={newsPostsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination> */}
          <Pagination onChange={paginate} defaultCurrent={newsPostsPerPage} total={posts.length}></Pagination>
        </div>
    );
};

export default Home;