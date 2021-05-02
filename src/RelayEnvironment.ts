import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetchGraphQL from './fetchGraphQl';

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQl utility with params.text.
async function fetchRelay(params: any, variables?: any) {
  console.log(`fetching query ${params.name} with variables ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
