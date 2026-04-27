
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { ScraperModule } from './scraper/scraper.module';
import { dataSourceOptions } from './database/typeorm.config';
import { VectorStoreModule } from './vector-store/vector-store.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      autoLoadEntities: true,
    }),
    ProductsModule,
    UsersModule,
    ChatModule,
    ScraperModule,
    VectorStoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
