import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'db_hero',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}