import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
console.log('------------------------', __dirname);
const datasource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5436,
  database: 'invt-mngr-db',
  username: 'postgres',
  password: 'postgres',
  entities: [
    __dirname + '/../../**/*.entity.ts',
    __dirname + '/../../**/*.entity.js',
  ],
  synchronize: false,
  migrationsTableName: 'migrations',
  namingStrategy: new SnakeNamingStrategy(),
  migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
  // cli: {
  //   migrationsDir: 'src/common/migrations',
  // },
});
export default datasource;