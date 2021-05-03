/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PokemonFragment = {
    readonly name: string | null;
    readonly number: string | null;
    readonly " $refType": "PokemonFragment";
};
export type PokemonFragment$data = PokemonFragment;
export type PokemonFragment$key = {
    readonly " $data"?: PokemonFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"PokemonFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokemonFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "number",
      "storageKey": null
    }
  ],
  "type": "Pokemon",
  "abstractKey": null
};
(node as any).hash = '19eb7fa3746056b7a2c5323a48a6f349';
export default node;
