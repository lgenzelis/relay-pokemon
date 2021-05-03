import React, { Suspense } from 'react'
import ReactDOM from 'react-dom';
import { loadQuery, RelayEnvironmentProvider } from 'react-relay/hooks'

import './index.css';
import App, { appPokemonQuery } from './App'
import RelayEnvironment from './RelayEnvironment'
import { AppPokemonQuery } from './__generated__/AppPokemonQuery.graphql'

const preloadedQuery = loadQuery<AppPokemonQuery>(RelayEnvironment, appPokemonQuery, {
  name: 'Vulpix'
});

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App appQueryRef={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
