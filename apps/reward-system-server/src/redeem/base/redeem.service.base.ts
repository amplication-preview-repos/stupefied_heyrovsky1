/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Redeem as PrismaRedeem } from "@prisma/client";

export class RedeemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RedeemCountArgs, "select">): Promise<number> {
    return this.prisma.redeem.count(args);
  }

  async redeems(args: Prisma.RedeemFindManyArgs): Promise<PrismaRedeem[]> {
    return this.prisma.redeem.findMany(args);
  }
  async redeem(
    args: Prisma.RedeemFindUniqueArgs
  ): Promise<PrismaRedeem | null> {
    return this.prisma.redeem.findUnique(args);
  }
  async createRedeem(args: Prisma.RedeemCreateArgs): Promise<PrismaRedeem> {
    return this.prisma.redeem.create(args);
  }
  async updateRedeem(args: Prisma.RedeemUpdateArgs): Promise<PrismaRedeem> {
    return this.prisma.redeem.update(args);
  }
  async deleteRedeem(args: Prisma.RedeemDeleteArgs): Promise<PrismaRedeem> {
    return this.prisma.redeem.delete(args);
  }
}