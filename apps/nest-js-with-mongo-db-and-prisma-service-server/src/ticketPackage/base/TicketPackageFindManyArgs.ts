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
import { TicketPackageWhereInput } from "./TicketPackageWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TicketPackageOrderByInput } from "./TicketPackageOrderByInput";

@ArgsType()
class TicketPackageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TicketPackageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TicketPackageWhereInput, { nullable: true })
  @Type(() => TicketPackageWhereInput)
  where?: TicketPackageWhereInput;

  @ApiProperty({
    required: false,
    type: [TicketPackageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TicketPackageOrderByInput], { nullable: true })
  @Type(() => TicketPackageOrderByInput)
  orderBy?: Array<TicketPackageOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TicketPackageFindManyArgs as TicketPackageFindManyArgs };
