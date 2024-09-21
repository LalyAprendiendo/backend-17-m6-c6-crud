import { Sequelize , DataTypes} from 'sequelize';

const sequelize = new Sequelize(
	'postgresql://ADA_owner:IZ30WhxVumqA@ep-dry-violet-a5alrqi3.us-east-2.aws.neon.tech/ADA?sslmode=require'
);

export default sequelize;
export {DataTypes}
