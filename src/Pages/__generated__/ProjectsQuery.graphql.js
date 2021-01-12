/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectsQueryVariables = {||};
export type ProjectsQueryResponse = {|
  +allProjects: ?{|
    +nodes: $ReadOnlyArray<?{|
      +projectid: any,
      +name: string,
      +budget: any,
    |}>
  |}
|};
export type ProjectsQuery = {|
  variables: ProjectsQueryVariables,
  response: ProjectsQueryResponse,
|};
*/


/*
query ProjectsQuery {
  allProjects {
    nodes {
      projectid
      name
      budget
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ProjectsConnection",
    "kind": "LinkedField",
    "name": "allProjects",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "projectid",
            "storageKey": null
          },
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
            "name": "budget",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProjectsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProjectsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5e51babd8e37740f41cb5c131232d47f",
    "id": null,
    "metadata": {},
    "name": "ProjectsQuery",
    "operationKind": "query",
    "text": "query ProjectsQuery {\n  allProjects {\n    nodes {\n      projectid\n      name\n      budget\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f2eeb78e455e64586ad7fa7194795fc8';

module.exports = node;
