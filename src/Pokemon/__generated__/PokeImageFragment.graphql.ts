/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PokeImageFragment = {
    readonly image: string | null;
    readonly name: string | null;
    readonly " $refType": "PokeImageFragment";
};
export type PokeImageFragment$data = PokeImageFragment;
export type PokeImageFragment$key = {
    readonly " $data"?: PokeImageFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"PokeImageFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokeImageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "image",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Pokemon",
  "abstractKey": null
};
(node as any).hash = '13b413ea0cbee90a1e416ff8ed431dc0';
export default node;
