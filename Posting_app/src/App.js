
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import NewPost from './NewPost';
import PostPage from './PostPage'
import Missing from './Missing'
import About from './About'
import Footer from './Footer'
import { Routes,Route,useNavigate  } from "react-router-dom";
import EditPost from './EditPost';


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "React JS",
      datetime: "May 28, 2024 11:17:36 AM",
      body: "completed"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "June 01, 2023 11:17:36 AM",
      body: "Let's talk about the advantages of coding . Coding offers numerous benefits, including: - Improved problem-solving skills and logical thinking. - Enhanced career opportunities and higher salary potential. - Ability to create innovative solutions and bring ideas to life."
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "June 01, 2024 11:17:36 AM",
      body: "Steps to start your web-development journey. To start web development, begin by: - Learning HTML, CSS, and JavaScript, the building blocks of the web. - Exploring popular frameworks like React, Angular, or Vue.js. - Building projects and practicing coding to develop your skills."
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "How to motivate yourself while coding. Here are 3 key points to motivate yourself while coding: - Set clear goals and break them down into smaller tasks. - Celebrate small victories and accomplishments. - Find a coding community or buddy for support and accountability."
    }
  ])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle,setPostTitle] = useState('');
  const[postBody,setPostBody]=useState('');
  const [editTitle,setEditTitle] = useState('');
  const[editBody,setEditBody]=useState('');
  const navigate = useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();
    const id = posts.length? posts[posts.length-1].id + 1 :1;
    const dateTime = format(new Date(),'MMMM dd,yyyy pp');
    const newPost ={id ,title:postTitle,datetime:dateTime,body:postBody};
    const allPosts=[...posts,newPost];
    setPosts(allPosts);
    setPostTitle('')
    setPostBody('');
    navigate("/")
  }
  const handleDelete =(id)=>{
    const postsList= posts.filter((post) => (post.id) !== id);
    setPosts(postsList);
    navigate("/")
  }
  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    
      
      setPosts(posts.map(post => post.id === id ? { ...updatedPost } : post));
      setEditTitle('');
      setEditBody('');
      navigate('/');
    
  }
  useEffect(()=>{
    const filteredResults=posts.filter((post)=>(((post.body).toLowerCase()).includes(search.toLowerCase())) || (((post.title).toLowerCase()).includes(search.toLowerCase())));
    setSearchResults(filteredResults.reverse())


  },[posts,search])

  return (

    <div className="App">
      <Header title="Posting App"/>
      
      <Nav 
       search ={search}
       setSearch = {setSearch}
      />
        <Routes>
          <Route path='/' element={ <Home posts={searchResults}/>} />
          <Route path='/post'>
              <Route index element={ <NewPost
              postTitle={postTitle}
              handleSubmit={handleSubmit}
              postBody={postBody}
              setPostBody={setPostBody}
              setPostTitle={setPostTitle}
              /> } />
              <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete} />} />
          </Route> 
          <Route path='/edit/:id' element ={
            <EditPost
            posts={posts}
            handleEdit={handleEdit}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
          />
          } />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      <Footer />  
      
      

    </div>
  );
}

export default App;
