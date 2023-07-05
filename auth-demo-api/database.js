import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('capstone', 'dbuser', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});