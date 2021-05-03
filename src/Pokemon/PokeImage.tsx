import { useFragment } from 'react-relay/hooks'
import graphql from 'babel-plugin-relay/macro'

import { PokeImageFragment$key } from './__generated__/PokeImageFragment.graphql'

interface PokeImageProps {
  pokemon: PokeImageFragment$key
}

export default function PokeImage ({ pokemon }: PokeImageProps) {
  const { image: imgSrc, name } = useFragment(graphql`
    fragment PokeImageFragment on Pokemon {
      image
      name
    }
  `, pokemon);

  if (!imgSrc || !name) {
    return null;
  }

  return <img src={imgSrc} alt={name}/>;
}
