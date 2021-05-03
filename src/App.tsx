import React, { Suspense, useEffect, useState } from 'react'
import { PreloadedQuery, useQueryLoader } from 'react-relay/hooks'

import './App.css';
import Pokemon, { pokemonQuery } from './Pokemon/Pokemon'
import { AppPokemonQuery } from './__generated__/AppPokemonQuery.graphql'
import PokeSearch from './Pokemon/PokeSearch'

interface AppProps {
  appQueryRef: PreloadedQuery<AppPokemonQuery>
  defaultPokemon: string;
}

function App({ appQueryRef, defaultPokemon }: AppProps) {
  const [pokemonName, setPokemonName] = useState(defaultPokemon)
  const [queryReference, loadQuery] = useQueryLoader<AppPokemonQuery>(pokemonQuery, appQueryRef);

  useEffect(() => {
    if (pokemonName) {
      loadQuery({ name: pokemonName.toLowerCase() });
    }
  }, [loadQuery, pokemonName]);

  return (
    <div className="App">
      <header className="App-header">
        <PokeSearch defaultPokemon={defaultPokemon} setPokemonName={setPokemonName}/>
        <Suspense fallback={'Loading...'}>
          {queryReference && <Pokemon pokemonQueryRef={queryReference} />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
