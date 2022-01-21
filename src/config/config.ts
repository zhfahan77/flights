import 'dotenv/config';

export const source = [
  {
    url: 'https://discovery-stub.comtravo.com/source1',
    auth: {},
    timeout: process.env.DISCOVERY_SERVICE_TIMEOUT,
  },
  {
    url: 'https://discovery-stub.comtravo.com/source2',
    auth: {
      username: process.env.DISCOVERY_SERVICE_USERNAME,
      password: process.env.DISCOVERY_SERVICE_PASSWORD,
    },
    timeout: process.env.DISCOVERY_SERVICE_TIMEOUT,
  }
];
