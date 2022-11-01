import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'swtsjnn5',
  dataset: 'production',
  apiVersion: '2022-10-31',
  useCdn: false,
});

export default client;
