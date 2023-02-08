import { PrismaClient } from '@prisma/client';
import * as dayjs from 'dayjs';
import { randomUUID } from 'node:crypto';
const prismaClient = new PrismaClient({
  log: ['query', 'info', 'warn'],
});
const main = async () => {
  await Promise.all([
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
        canceledAt: dayjs().add(2, 'day').toDate(),
        readAt: dayjs().add(1, 'day').toDate(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
        canceledAt: dayjs().add(2, 'day').toDate(),
        readAt: dayjs().add(1, 'day').toDate(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
        canceledAt: dayjs().add(2, 'day').toDate(),
        readAt: dayjs().add(1, 'day').toDate(),
      },
    }),
    prismaClient.notification.create({
      data: {
        id: randomUUID(),
        category: 'social media',
        content: 'new user joined',
        recipientId: randomUUID(),
        createdAt: new Date(),
        canceledAt: dayjs().add(2, 'day').toDate(),
        readAt: dayjs().add(1, 'day').toDate(),
      },
    }),
  ]);
};
main();
