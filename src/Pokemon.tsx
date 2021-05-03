import { useFragment } from 'react-relay/hooks'
import graphql from 'babel-plugin-relay/macro'

import { PokemonFragment$key } from './__generated__/PokemonFragment.graphql'

interface PokemonProps {
  pokemon: PokemonFragment$key
}

export default function Pokemon ({ pokemon }: PokemonProps) {
  const pokemonData = useFragment(graphql`
    fragment PokemonFragment on Pokemon {
      name
      number
    }
  `, pokemon);
  console.log({ pokemonData })

  return(
    <p>
      Pokemon: <strong>{`${pokemonData.number} - ${pokemonData.name}`}</strong>
    </p>
  );
}
