import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './Posts';
//import Pagination from './components/Pagination';
import { Pagination } from 'antd';



const CnnPosts = () =>{


    const [cnnPosts,setCnnPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentCnnPosts,setCurrentCnnPosts] = useState(1);
    const [newsPostsPerPage] = useState(10);
  
    useEffect(() =>{
      const getCnnPosts = async () =>{
        setLoading(true);
        const res = await axios.get('https://newsapi.org/v2/everything?domains=cnn.com&language=en&pageSize=100&apiKey=c8fbc66687ed4ac6b007b3244da6af98');
        setCnnPosts(res.data.articles);
        setLoading(false);
      } 
  
      getCnnPosts();
    },[])
  
    const indexOfLastPost = currentCnnPosts * newsPostsPerPage;
    const indexOfFirstPost = indexOfLastPost - newsPostsPerPage;
    const currentPosts = cnnPosts.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = pageNumber => setCurrentCnnPosts(pageNumber);

    return (
        <div className ="container mt-5">
          <h1 className="text-primary mb-3">All News</h1>
          <Posts newsPosts={currentPosts} loading={loading}></Posts>
          {/* <Pagination newsPostsPerPage={newsPostsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination> */}
          <Pagination onChange={paginate} defaultCurrent={newsPostsPerPage} total={cnnPosts.length}></Pagination>
        </div>
    );
};

export default CnnPosts;