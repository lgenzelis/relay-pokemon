import { useEffect, useState } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay/hooks'

import './App.css';
import Pokemon from './Pokemon'
import { AppPokemonQuery } from './__generated__/AppPokemonQuery.graphql'

interface AppProps {
  appQueryRef: PreloadedQuery<AppPokemonQuery>
}

export const appPokemonQuery = graphql`
  query AppPokemonQuery($name: String!) {
    pokemon(name: $name) {
      id
      ...PokemonFragment
    }
  }
`

function App({ appQueryRef }: AppProps) {
  const data = usePreloadedQuery(appPokemonQuery, appQueryRef);

  console.log({ appPokemonData: data })

  const [repos, setRepos] = useState<number[]>([]);

  useEffect(() => {
    let repo_id = 0;
    const intervalId = setInterval(() => {
      setRepos(_repos => [..._repos, repo_id]);
      repo_id++;
      if (repo_id > 0) {
        clearInterval(intervalId);
      }
    }, 300)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {repos.map(repoId => data.pokemon && (
          <Pokemon pokemon={data.pokemon} key={data.pokemon.id} />
        ))}
      </header>
    </div>
  );
}

export default App;
