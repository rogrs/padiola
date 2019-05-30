import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    dialect:  'postgres',
    protocol: 'postgres',
  },
);

const models = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
