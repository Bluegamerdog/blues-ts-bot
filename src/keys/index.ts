import { Keys } from '../types';

const keys: Keys = {
  clientToken: process.env.CLIENT_TOKEN ?? '',
  testGuild: process.env.TEST_GUILD ?? ''
};

if (Object.values(keys).length === 0) {
  console.log(keys);
  console.log(keys.clientToken);
  throw new Error("No bot token found!")
}

export default keys;
