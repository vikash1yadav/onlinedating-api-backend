module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    gender_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    about_me: {
      type: DataTypes.STRING(1000),
      // allowNull: false,
    },
    passion: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    job: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      // allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    hometown: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    current_location: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    // current_geog: {
    //   type: DataTypes.GEOGRAPHY,
    //   // unique: true,
    //   // allowNull: false,
    // },
    is_visible_age: {
      type: DataTypes.BOOLEAN,
      // unique: true,

    },
    is_show_contact: {
      type: DataTypes.BOOLEAN,
      // unique: true,

    },
    is_email_visible: {
      type: DataTypes.BOOLEAN,
      // unique: true,

    },
    is_hometown_visible: {
      type: DataTypes.BOOLEAN,
      // unique: true,

    },
    is_job_visible: {
      type: DataTypes.BOOLEAN,
      // unique: true,

    },
    is_show_initials: {
      type: DataTypes.BOOLEAN,
      // unique: true,

    },

  },
    {

    });
  Users.associate = function (models) {
    models.foods.belongsToMany(Users,
      { through: 'user_food', foreignKey: 'food_id' }
    );
    Users.belongsToMany(models.foods,
      { through: 'user_food', foreignKey: 'user_id' }
    );

    models.musics.belongsToMany(Users,
      { through: 'user_music', foreignKey: 'music_id' }
    );
    Users.belongsToMany(models.musics,
      { through: 'user_music', foreignKey: 'user_id' }
    )

    models.hobbies.belongsToMany(Users,
      { through: 'user_hobby', foreignKey: 'hobby_id' }
    );
    Users.belongsToMany(models.hobbies,
      { through: 'user_hobby', foreignKey: 'user_id' }
    )

    models.pets.belongsToMany(Users,
      { through: 'user_pet', foreignKey: 'pet_id' }
    );
    Users.belongsToMany(models.pets,
      { through: 'user_pet', foreignKey: 'user_id' }
    )

    models.going_out.belongsToMany(Users,
      { through: 'user_going_out', foreignKey: 'going_out_id' }
    );
    Users.belongsToMany(models.going_out,
      { through: 'user_going_out', foreignKey: 'user_id' }
    )

    models.films_tv.belongsToMany(Users,
      { through: 'user_film_tv', foreignKey: 'film_tv_id' }
    );
    Users.belongsToMany(models.films_tv,
      { through: 'user_film_tv', foreignKey: 'user_id' }
    )

    models.sports_adventures.belongsToMany(Users,
      { through: 'user_sports_adventures', foreignKey: 'sport_adventure_id' }
    );
    Users.belongsToMany(models.sports_adventures,
      { through: 'user_sports_adventures', foreignKey: 'user_id' }
    )

    models.genders.hasMany(Users, { foreignKey: 'gender_id' })
    Users.belongsTo(models.genders, { foreignKey: 'gender_id' })

    models.users_gallery.belongsTo(Users, { foreignKey: 'user_id' })
    Users.hasOne(models.users_gallery, { foreignKey: 'user_id' })

  };
  return Users;
}
