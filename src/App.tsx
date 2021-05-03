import React, { Suspense, useEffect, useState } from 'react'
import { PreloadedQuery, useQueryLoader } from 'react-relay/hooks'

import './App.css';
import Pokemon from './Pokemon/Pokemon'
import PokeSearch from './Pokemon/PokeSearch'
import pokemonQuery, { PokemonQuery } from './Pokemon/__generated__/PokemonQuery.graphql'

interface AppProps {
  appQueryRef: PreloadedQuery<PokemonQuery>
  defaultPokemon: string;
}

function App({ appQueryRef, defaultPokemon }: AppProps) {
  const [pokemonName, setPokemonName] = useState(defaultPokemon)
  const [queryReference, loadQuery] = useQueryLoader(pokemonQuery, appQueryRef);

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
