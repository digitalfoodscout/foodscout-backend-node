'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable(
            "Users", {
                id: {
                    type: Sequelize.INTEGER,
                    unique: true,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                username: {
                    type: Sequelize.STRING,
                    unique: true,
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING,
                    unique: true,
                    allowNull: true
                },
                password: {
                    type: Sequelize.STRING,
                    allowNull: false
                }
            }, {
                classMethods: {
                    associate: function (models) {
                        //TODO Errorfix
                        User.hasMany(models.Token);
                    }
                }
            },
            {
                engine: 'MYISAM',                     // default: 'InnoDB'
                charset: 'latin1',                    // default: null
                schema: 'public'                      // default: public, PostgreSQL only.
            }
        );
        queryInterface.createTable(
            "FoodDiaryEntries", {
                id: {
                    type: Sequelize.INTEGER,
                    unique: true,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                date: {
                    type: Sequelize.DATE,
                    allowNull: false
                }
            }, {
                classMethods: {
                    associate: function (models) {
                        //TODO
                    }
                }
            },
            {
                engine: 'MYISAM',                     // default: 'InnoDB'
                charset: 'latin1',                    // default: null
                schema: 'public'                      // default: public, PostgreSQL only.
            }
        );
        queryInterface.createTable(
            "Meals", {
                id: {
                    type: Sequelize.INTEGER,
                    unique: true,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                public: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false
                }
            }, {
                classMethods: {
                    associate: function (models) {
                        //TODO
                    }
                }
            });
        queryInterface.createTable(
            "StressLevels", {
            id: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            intensity: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        }, {
            classMethods: {
                associate: function(models) {
                    //TODO
                }
            }
        });
        queryInterface.createTable(
            "Symptoms", {
            id: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false
            }
        }, {
            classMethods: {
                associate: function(models) {
                    //TODO
                }
            }
        });
        queryInterface.createTable(
            "SymptomDiaryEntries", {
            id: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            intensity: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        }, {
            classMethods: {
                associate: function(models) {
                    //TODO
                }
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         return queryInterface.dropTable('users');
         */
        queryInterface.dropTable('Users');
        queryInterface.dropTable('Meals');
        queryInterface.dropTable('FoodDiaryEntries');
        queryInterface.dropTable('StressLevels');
        queryInterface.dropTable('Symptoms');
        queryInterface.dropTable('SymptomDiaryEntries');
    }
};
