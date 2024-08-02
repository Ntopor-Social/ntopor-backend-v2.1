/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VoteEventCandidateWhereInput } from "./VoteEventCandidateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VoteEventCandidateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VoteEventCandidateWhereInput,
  })
  @ValidateNested()
  @Type(() => VoteEventCandidateWhereInput)
  @IsOptional()
  @Field(() => VoteEventCandidateWhereInput, {
    nullable: true,
  })
  every?: VoteEventCandidateWhereInput;

  @ApiProperty({
    required: false,
    type: () => VoteEventCandidateWhereInput,
  })
  @ValidateNested()
  @Type(() => VoteEventCandidateWhereInput)
  @IsOptional()
  @Field(() => VoteEventCandidateWhereInput, {
    nullable: true,
  })
  some?: VoteEventCandidateWhereInput;

  @ApiProperty({
    required: false,
    type: () => VoteEventCandidateWhereInput,
  })
  @ValidateNested()
  @Type(() => VoteEventCandidateWhereInput)
  @IsOptional()
  @Field(() => VoteEventCandidateWhereInput, {
    nullable: true,
  })
  none?: VoteEventCandidateWhereInput;
}
export { VoteEventCandidateListRelationFilter as VoteEventCandidateListRelationFilter };
