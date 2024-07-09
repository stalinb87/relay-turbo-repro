/**
 * @generated SignedSource<<d934d252751f4acac7d7e60db246675f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type QueryRootQuery$variables = Record<PropertyKey, never>;
export type QueryRootQuery$data = {
  readonly name: string | null | undefined;
};
export type QueryRootQuery = {
  response: QueryRootQuery$data;
  variables: QueryRootQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QueryRootQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QueryRootQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "bd73ecb0fe6ceb19f201032924086d18",
    "id": null,
    "metadata": {},
    "name": "QueryRootQuery",
    "operationKind": "query",
    "text": "query QueryRootQuery {\n  name\n}\n"
  }
};
})();

(node as any).hash = "7a874bbb09ad37fd5fe176c868c06242";

export default node;
