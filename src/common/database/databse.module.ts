import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host:  'localhost',
        port:  5436,
        username:  'postgres',
        password:  'postgres',
        database:  'invt-mngr-db',
        entities: [
          __dirname + '/../../**/*.entity.ts',
          __dirname + '/../../**/*.entity.js',
        ],
        synchronize: false,
        migrationsTableName: 'migrations',
        logging: ['error', 'info'],
        namingStrategy: new SnakeNamingStrategy(),
      }),
    }),
  ],
})
export class DatabaseModule {}
