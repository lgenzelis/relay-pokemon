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
        readonly name: string | null;
        readonly number: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PokeImageFragment">;
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
    name
    number
    ...PokeImageFragment
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
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
          (v3/*: any*/),
          (v4/*: any*/),
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
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "image",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e9e37021e58db918b1ea4bb76c2cbe5d",
    "id": null,
    "metadata": {},
    "name": "AppPokemonQuery",
    "operationKind": "query",
    "text": "query AppPokemonQuery(\n  $name: String!\n) {\n  pokemon(name: $name) {\n    id\n    name\n    number\n    ...PokeImageFragment\n  }\n}\n\nfragment PokeImageFragment on Pokemon {\n  image\n  name\n}\n"
  }
};
})();
(node as any).hash = '69318eb1f2f3c279847f8c9f24b5eb76';
export default node;
