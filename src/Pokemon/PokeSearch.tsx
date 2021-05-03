import React, { useRef } from 'react'

interface PokeSearchProps {
  setPokemonName: (name: string) => void;
  defaultPokemon: string;
}

export default function PokeSearch({ setPokemonName, defaultPokemon }: PokeSearchProps) {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (inputRef.current) {
        setPokemonName(inputRef.current.value);
        inputRef.current.value = '';
      }
    }}>
      <input defaultValue={defaultPokemon} ref={inputRef} autoFocus />
      <button>Search</button>
    </form>
  );
}
