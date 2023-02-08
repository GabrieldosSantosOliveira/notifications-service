import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Module } from '@nestjs/common';

import { PrismaNotificationsRepository } from './prisma/prisma-notifications-reporitory';
import { PrismaService } from './prisma/prisma.service';
@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
