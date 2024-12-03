import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './respositories/users.repositories';
import { CategoriesRepository } from './respositories/categories.repositories';
import { BankAccountsRepository } from './respositories/bank-accounts.repositories';
import { TransactionsRepository } from './respositories/transaction.repositories';

@Global()
@Module({
  providers: [
    UsersRepository,
    PrismaService,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
  exports: [
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
