import { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  return (
    <div className="App">
      <button onClick={() => setResourceType('posts')}>posts</button>
      <button onClick={() => setResourceType('users')}>users</button>
      <button onClick={() => setResourceType('comments')}>comments</button>

      <h1>{resourceType}</h1>
      <ol>
        {
          items.map(item => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))
        }
      </ol>
    </div>
  );
}

export default App;