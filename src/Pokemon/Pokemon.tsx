import { PreloadedQuery, usePreloadedQuery } from 'react-relay/hooks';

import { AppPokemonQuery } from '../__generated__/AppPokemonQuery.graphql';
import PokeImage from './PokeImage';
import graphql from 'babel-plugin-relay/macro'

export const pokemonQuery = graphql`
    query PokemonQuery($name: String!) {
        pokemon(name: $name) {
            name
            number
            ...PokeImageFragment
        }
    }
`

interface PokemonProps {
  pokemonQueryRef: PreloadedQuery<AppPokemonQuery>
}

export default function Pokemon ({ pokemonQueryRef }: PokemonProps) {
  const pokemonData = usePreloadedQuery(pokemonQuery, pokemonQueryRef);
  console.log({ pokemonData })

  if (!pokemonData.pokemon) {
    return <span>Pokewhat?</span>;
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
