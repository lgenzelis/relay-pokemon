// your-app-name/src/App.js
import React from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQl';

const { useState, useEffect } = React;

function App() {
  // We'll load the name of a repository, initially setting it to null
  const [name, setName] = useState(null);

  // When the component mounts we'll fetch a repository name
  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query RepositoryNameQuery {
        # wow, so cool 🤩
        repository(owner: "lgenzelis" name: "next-barebone") {
          name
        }
      }
    `).then(response => {
      if (response.errors) {
        throw new Error(JSON.stringify(response.errors));
      }
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.data;
      setName(data.repository.name);
    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // Render "Loading" until the query completes
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {name != null ? `Repository: ${name}` : "Loading"}
        </p>
      </header>
    </div>
  );
}

export default App;
