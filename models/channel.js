export default (sequelize, DataTypes) => {
    const Channel = sequelize.define("channel", {
        name:  DataTypes.STRING,
        public:  DataTypes.BOOLEAN,
    },
    {underscored: true},
  );
    
    Channel.associate = function(models) {
      Channel.belongsTo(models.Team, {
        foreignKey: {
          name: 'teamId',
          field: 'team_id',
        },
      });
    };
    
    return Channel;
  };