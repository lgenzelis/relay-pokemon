async function fetchGraphQL(text: string, variables?: Record<string, any>) {
  const response = await fetch('https://graphql-pokemon2.vercel.app/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
