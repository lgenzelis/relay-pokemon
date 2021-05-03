import * as React  from 'react'
import ReactDOM from 'react-dom';
import { loadQuery, RelayEnvironmentProvider } from 'react-relay/hooks'

import './index.css';
import App  from './App'
import RelayEnvironment from './RelayEnvironment'
import pokemonQuery, { PokemonQuery } from './Pokemon/__generated__/PokemonQuery.graphql'

const defaultPokemon = 'pikachu';

const preloadedQuery = loadQuery<PokemonQuery>(RelayEnvironment, pokemonQuery, {
  name: defaultPokemon
});

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <App appQueryRef={preloadedQuery} defaultPokemon={defaultPokemon}/>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
