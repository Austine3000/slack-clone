import Sequelize from "sequelize";
  
const sequelize = new Sequelize('slack', 'slack', 'slack', {
  dialect: 'postgres',
  underscored: true,
});

const models = {
    User: sequelize.import('./user'),
    Channel: sequelize.import('./channel'),
    Message: sequelize.import('./message'),
    Team: sequelize.import('./team'),
};

Object.keys(models).forEach(function(modelName) {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models; 