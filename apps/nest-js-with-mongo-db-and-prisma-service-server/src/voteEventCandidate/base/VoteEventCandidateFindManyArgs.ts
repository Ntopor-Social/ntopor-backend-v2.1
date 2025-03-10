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
import { VoteEventCandidateWhereInput } from "./VoteEventCandidateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { VoteEventCandidateOrderByInput } from "./VoteEventCandidateOrderByInput";

@ArgsType()
class VoteEventCandidateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VoteEventCandidateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => VoteEventCandidateWhereInput, { nullable: true })
  @Type(() => VoteEventCandidateWhereInput)
  where?: VoteEventCandidateWhereInput;

  @ApiProperty({
    required: false,
    type: [VoteEventCandidateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [VoteEventCandidateOrderByInput], { nullable: true })
  @Type(() => VoteEventCandidateOrderByInput)
  orderBy?: Array<VoteEventCandidateOrderByInput>;

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

export { VoteEventCandidateFindManyArgs as VoteEventCandidateFindManyArgs };
