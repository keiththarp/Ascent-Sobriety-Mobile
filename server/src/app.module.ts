require('dotenv').config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User } from './user/user.entity';
import { QuoteSelection } from './quote-selection/quote-selection.entity';

import { UserModule } from './user/user.module';
import { QuoteSelectionModule } from './quote-selection/quote-selection.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, QuoteSelection],
      synchronize: true,
    }),
    UserModule,
    QuoteSelectionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// Synchronize shouldn't be set to TRUE for production.  Data could be lost. 
