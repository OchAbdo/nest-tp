import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";



export const Typeorm = (configService:ConfigService):TypeOrmModuleOptions => ({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    port: Number(configService.get('DB_PORT')),
    database: configService.get('DB_NAME'),
    entities: [User],
    synchronize: true,
    autoLoadEntities: true,
});