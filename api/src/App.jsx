import { useState, useEffect } from 'react'
import { getPost, getUser } from './api'
import PostCard from './component/postCard'
import UserCard from './component/userCard'
import "./App.css"


function App() {
  const [data, setData] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    getPost().then((posts) => setData(posts));
  }, [])

  useEffect(() => {
    getUser().then((user) => setUser(user.results[0]));
  }, [])

const refresh = ()=>{
  getUser().then((user) => setUser(user.results[0]));
}


  return (
    <>

      <div className="container">
        {user && <UserCard data={user} />}
        <button id='button' onClick={refresh}>Get New User data</button>
        <div className="postcar-container">
          {
            data ? data.map((e) => <PostCard key={e.id} title={e.title} body={e.body} />) : <p>No data comming from api</p>
          }
        </div>

      </div>
    </>
  )
}

export default App
