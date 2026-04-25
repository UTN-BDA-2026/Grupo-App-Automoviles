
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config()

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USER,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],  
    migrations: [__dirname + '/migrations/*{.ts,.js}'],  
    synchronize: false, 
}

export const dataSource = new DataSource(dataSourceOptions)