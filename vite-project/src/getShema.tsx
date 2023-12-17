import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql/utilities';

export const getSchema = async (endpoint: string) => {
  const introspectionQuery = getIntrospectionQuery();
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query: introspectionQuery }),
  });

  const schemaJSON = await response.json();
  const introspectionData = schemaJSON.data;
  const schema = buildClientSchema(introspectionData);
  const schemaSDL = printSchema(schema);

  console.log(schemaSDL);
};

