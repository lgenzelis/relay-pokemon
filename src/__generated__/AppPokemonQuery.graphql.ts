/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppPokemonQueryVariables = {};
export type AppPokemonQueryResponse = {
    readonly pokemon: {
        readonly id: string;
        readonly number: string | null;
        readonly name: string | null;
    } | null;
};
export type AppPokemonQuery = {
    readonly response: AppPokemonQueryResponse;
    readonly variables: AppPokemonQueryVariables;
};



/*
query AppPokemonQuery {
  pokemon(name: "pikachu") {
    id
    number
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "name",
        "value": "pikachu"
      }
    ],
    "concreteType": "Pokemon",
    "kind": "LinkedField",
    "name": "pokemon",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "number",
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
    "storageKey": "pokemon(name:\"pikachu\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPokemonQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppPokemonQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f5285e4a036b6895d39618e53764f1c3",
    "id": null,
    "metadata": {},
    "name": "AppPokemonQuery",
    "operationKind": "query",
    "text": "query AppPokemonQuery {\n  pokemon(name: \"pikachu\") {\n    id\n    number\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bd6d77f1fcf00734e5a5e5e88033c47e';
export default node;
