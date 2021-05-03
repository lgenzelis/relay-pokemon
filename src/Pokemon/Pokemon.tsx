import { PreloadedQuery, usePreloadedQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro'

import { PokemonQuery } from './__generated__/PokemonQuery.graphql'
import PokeImage from './PokeImage';

interface PokemonProps {
  pokemonQueryRef: PreloadedQuery<PokemonQuery>
}

export default function Pokemon ({ pokemonQueryRef }: PokemonProps) {
  const pokemonData = usePreloadedQuery(graphql`
    query PokemonQuery($name: String!) {
      pokemon(name: $name) {
        name
        number
        ...PokeImageFragment
      }
    }
  `, pokemonQueryRef);
  console.log({ pokemonData })

  if (!pokemonData.pokemon) {
    return <span>PokeWHAT?</span>;
  }

  return(
    <>
      <div>
        Pokemon: <strong>{`${pokemonData.pokemon?.number} - ${pokemonData.pokemon?.name}`}</strong>
      </div>
      <PokeImage pokemon={pokemonData.pokemon} />
    </>
  );
}
