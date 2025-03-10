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
import { VoteEventWhereUniqueInput } from "./VoteEventWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VoteEventUpdateInput } from "./VoteEventUpdateInput";

@ArgsType()
class UpdateVoteEventArgs {
  @ApiProperty({
    required: true,
    type: () => VoteEventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VoteEventWhereUniqueInput)
  @Field(() => VoteEventWhereUniqueInput, { nullable: false })
  where!: VoteEventWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VoteEventUpdateInput,
  })
  @ValidateNested()
  @Type(() => VoteEventUpdateInput)
  @Field(() => VoteEventUpdateInput, { nullable: false })
  data!: VoteEventUpdateInput;
}

export { UpdateVoteEventArgs as UpdateVoteEventArgs };
