import Sequelize from 'sequelize';


var connectionString = process.env.DATABASE_URL || "postgres://padiola:padiola@localhost:5432/padiola";

const sequelize = new Sequelize(
  connectionString,
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
