import { Suspense, useEffect, useState } from 'react'
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';

import './App.css';
import RelayEnvironment from './RelayEnvironment';
import { AppRepositoryNameQuery } from './__generated__/AppRepositoryNameQuery.graphql'

// Define a query
const RepositoryNameQuery = graphql`
    query AppRepositoryNameQuery {
        repository(owner: "lgenzelis", name: "next-barebone") {
            name,
            createdAt
        }
    }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery<AppRepositoryNameQuery>(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});

function Repository() {
  const data = usePreloadedQuery(RepositoryNameQuery, preloadedQuery);

  return(
    <p>
      Repository: <strong>{data.repository?.name}</strong>
    </p>
  );
}

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App() {

  const [repos, setRepos] = useState<number[]>([]);

  useEffect(() => {
    let repo_id = 0;
    const intervalId = setInterval(() => {
      setRepos(_repos => [..._repos, repo_id]);
      repo_id++;
      if (repo_id > 5) {
        clearInterval(intervalId);
      }
    }, 3000)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {repos.map(repoId => <Repository key={repoId} />)}
      </header>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
