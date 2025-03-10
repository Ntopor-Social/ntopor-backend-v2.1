/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Transaction } from "./Transaction";
import { TransactionCountArgs } from "./TransactionCountArgs";
import { TransactionFindManyArgs } from "./TransactionFindManyArgs";
import { TransactionFindUniqueArgs } from "./TransactionFindUniqueArgs";
import { DeleteTransactionArgs } from "./DeleteTransactionArgs";
import { TransactionService } from "../transaction.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Transaction)
export class TransactionResolverBase {
  constructor(
    protected readonly service: TransactionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async _transactionsMeta(
    @graphql.Args() args: TransactionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Transaction])
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async transactions(
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    return this.service.transactions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Transaction, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "own",
  })
  async transaction(
    @graphql.Args() args: TransactionFindUniqueArgs
  ): Promise<Transaction | null> {
    const result = await this.service.transaction(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Transaction)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "delete",
    possession: "any",
  })
  async deleteTransaction(
    @graphql.Args() args: DeleteTransactionArgs
  ): Promise<Transaction | null> {
    try {
      return await this.service.deleteTransaction(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
