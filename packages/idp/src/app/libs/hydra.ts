import { Configuration, OAuth2Api } from '@ory/hydra-client';

export const hydraAdmin = new OAuth2Api(
  new Configuration({
    basePath: 'http://localhost:4445/',
  })
);
