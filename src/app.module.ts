import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { CoffeeRatingService } from './coffee-rating/coffee-rating.service';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5432, // database host
      username: 'postgres', // username
      password: 'postgres', // user password
      database: 'iluvcoffee', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      /**
       * (recommended: disable synchronize in prod)
       */
      synchronize: true, // your entities will be synced with the database
    }),
    CoffeeRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService, CoffeeRatingService],
})
export class AppModule {}
