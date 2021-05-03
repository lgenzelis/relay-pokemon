async function fetchGraphQL(text: any, variables?: any) {
  const response = await fetch('https://graphql-pokemon2.vercel.app/', {
    method: 'POST',
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
