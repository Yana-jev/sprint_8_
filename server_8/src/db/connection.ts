import {Sequelize} from 'sequelize'

const sequelize = new Sequelize('lista', 'root', 'admin123', {
   host: 'localhost',
   dialect: 'mysql',
   
});

export default sequelize