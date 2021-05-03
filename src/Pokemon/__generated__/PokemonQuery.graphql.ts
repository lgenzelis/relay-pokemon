/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PokemonQueryVariables = {
    name: string;
};
export type PokemonQueryResponse = {
    readonly pokemon: {
        readonly name: string | null;
        readonly number: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PokeImageFragment">;
    } | null;
};
export type PokemonQuery = {
    readonly response: PokemonQueryResponse;
    readonly variables: PokemonQueryVariables;
};



/*
query PokemonQuery(
  $name: String!
) {
  pokemon(name: $name) {
    name
    number
    ...PokeImageFragment
    id
  }
}

fragment PokeImageFragment on Pokemon {
  image
  name
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "number",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemon",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokeImageFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PokemonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemon",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0657354321f7e3e65a4114e3ea0250bc",
    "id": null,
    "metadata": {},
    "name": "PokemonQuery",
    "operationKind": "query",
    "text": "query PokemonQuery(\n  $name: String!\n) {\n  pokemon(name: $name) {\n    name\n    number\n    ...PokeImageFragment\n    id\n  }\n}\n\nfragment PokeImageFragment on Pokemon {\n  image\n  name\n}\n"
  }
};
})();
(node as any).hash = '60663f734308397cc3bbc44fa1b028d3';
export default node;
