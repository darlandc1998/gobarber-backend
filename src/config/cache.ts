import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';

  config: {
    redis: RedisOptions;
  };
}

export default {
  driver: 'redis',

  config: {
    redis: {
      host: String(process.env.REDIS_HOST),
      port: Number(process.env.REDIS_PORT),
      password: String(process.env.REDIS_PASSWORD),
    },
  },
} as ICacheConfig;
