/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TicketPackageWhereUniqueInput } from "./TicketPackageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TicketPackageUpdateInput } from "./TicketPackageUpdateInput";

@ArgsType()
class UpdateTicketPackageArgs {
  @ApiProperty({
    required: true,
    type: () => TicketPackageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TicketPackageWhereUniqueInput)
  @Field(() => TicketPackageWhereUniqueInput, { nullable: false })
  where!: TicketPackageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TicketPackageUpdateInput,
  })
  @ValidateNested()
  @Type(() => TicketPackageUpdateInput)
  @Field(() => TicketPackageUpdateInput, { nullable: false })
  data!: TicketPackageUpdateInput;
}

export { UpdateTicketPackageArgs as UpdateTicketPackageArgs };
