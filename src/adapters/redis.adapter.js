const redis = require('redis');
const { promisify } = require('util');

class RedisAdapter {
  constructor() {
    this.client = redis.createClient({
      host: process.env.REDIS_HOST || 'api-crud-redis',
      port: process.env.REDIS_PORT || 6379,
      password: process.env.REDIS_PASSWORD || 'root'
    });
    this.client.connect()
    this.client.on('error', (err) => {
      console.error(err);
    });
  }

  getValue(key) {
    const value = this.client.get(key);
    try {
      return value;
    } catch (err) {
      console.error(`Error parsing JSON string: ${err}`);
      return value;
    }
  }
  

  async setValue(key, value, expirationTimeInSeconds = 60) {
    this.client.set(key, value, 'EX', expirationTimeInSeconds);
  }
}

module.exports = RedisAdapter;
