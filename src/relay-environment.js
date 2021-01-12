import {
    Environment,
    Network,
    RecordSource,
    Store,
  } from 'relay-runtime';
  
  /*
  import { getCurrentToken } from './utils/auth';
  */
  function getGraphQLURL() {
    return 'http://192.168.2.36:5000/graphql'
  }
  
  async function fetchQuery(
    operation,
    variables,
  ) {
    const headers = {
      'Content-Type': 'application/json',
    };
    /*
    const authtoken = getCurrentToken();
    if (authtoken) {
      headers.Authorization = `Bearer ${authtoken}`;
    }
    */
    let resp = await fetch(getGraphQLURL(), {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    });
    return resp.json();
  }
  
  const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),  
  });
  
  export default environment;