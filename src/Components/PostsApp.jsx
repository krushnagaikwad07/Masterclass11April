import axios from 'axios'
import React, {useState , useEffect} from "react"
import "../App.css"

const url = "https://jsonplaceholder.typicode.com/posts";

export default function PostsApp() {

  const [posts, setPosts]= useState([]);
  const [isvisible, setIsVisible] = useState(true)
  useEffect (()=>{

    axios.get(url).then((response) => {
     setPosts(response.data) 
    });
  }, []);

  const toggleTable = (event) =>{

  }

  return(
    <div>
    <h1>User App</h1>
    <div>
    Show Table : <input onChange={toggleTable} type='checkbox' name='' id='' ></input>

    <hr/>
    </div>
    <table>
      <thead>
        <tr>
          <th>SrNo</th>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          </tr>
          </thead>
          <tbody>
            { posts.map((posts, index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                  <td>{posts.userId}</td>
                  <td>{posts.id}</td>
                  <td>{posts.title}</td>
                  <td>{posts.body}</td>
                </tr>
                );
                
              })}
          </tbody>
        </table>
      
    </div>
  )
}
