export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default_secret',
    expiresIn: process.env.APP_EXPIRES || '1d',
  },
};
