/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppPokemonQueryVariables = {
    name: string;
};
export type AppPokemonQueryResponse = {
    readonly pokemon: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"PokemonFragment">;
    } | null;
};
export type AppPokemonQuery = {
    readonly response: AppPokemonQueryResponse;
    readonly variables: AppPokemonQueryVariables;
};



/*
query AppPokemonQuery(
  $name: String!
) {
  pokemon(name: $name) {
    id
    ...PokemonFragment
  }
}

fragment PokemonFragment on Pokemon {
  name
  number
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPokemonQuery",
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokemonFragment"
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
    "name": "AppPokemonQuery",
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "42361dc508aaf9749ae81e9eb8ac9381",
    "id": null,
    "metadata": {},
    "name": "AppPokemonQuery",
    "operationKind": "query",
    "text": "query AppPokemonQuery(\n  $name: String!\n) {\n  pokemon(name: $name) {\n    id\n    ...PokemonFragment\n  }\n}\n\nfragment PokemonFragment on Pokemon {\n  name\n  number\n}\n"
  }
};
})();
(node as any).hash = 'b1cd3b631a995e2e95786c253eef1f8b';
export default node;
