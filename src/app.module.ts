import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Typeorm } from './config/Typeorm';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal : true}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:Typeorm
    }),
    UserModule,
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
