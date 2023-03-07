const RedisAdapter = require('../adapters/redis.adapter');

class RedisRepository {
  constructor() {
    this.redisAdapter = new RedisAdapter();
  }

  async getByIdRedis(key) {
    try {
      const value = await this.redisAdapter.getValue(key);
      return JSON.parse(value);
    } catch (err) {
      console.error(`Error getting value from Redis: ${err}`);
      return null;
    }
  }

  async save(key, value, expirationTimeInSeconds = 300) {
    try {
      const serializedValue = JSON.stringify(value);
      await this.redisAdapter.setValue(key, serializedValue, expirationTimeInSeconds);
    } catch (err) {
      console.error(`Error saving value to Redis: ${err}`);
    }
  }
}

module.exports = RedisRepository;
