/** @format */

import { createClient } from 'contentful';

const client = createClient({
  space: 'ygjvfvz3r61b',
  environment: 'master',
  accessToken: 'cUX1VNe6s6uOXf9KRGEcJn7CAVeTA9go-rBlLqYSFQc',
});

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response));
