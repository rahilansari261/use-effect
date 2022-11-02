import './App.css'
import React, { useState, useEffect } from 'react'
function App() {
  const [resourceType, setResourceType] = useState('posts')

  useEffect(() => {
    console.log('render')
  }, [resourceType])
  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('useres')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  )
}

export default App
