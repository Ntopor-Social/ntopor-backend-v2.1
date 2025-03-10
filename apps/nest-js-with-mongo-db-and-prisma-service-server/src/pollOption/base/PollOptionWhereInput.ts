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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { PollingWhereUniqueInput } from "../../polling/base/PollingWhereUniqueInput";
import { PollListRelationFilter } from "../../poll/base/PollListRelationFilter";

@InputType()
class PollOptionWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  dateCreated?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PollingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PollingWhereUniqueInput)
  @IsOptional()
  @Field(() => PollingWhereUniqueInput, {
    nullable: true,
  })
  polling?: PollingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PollListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PollListRelationFilter)
  @IsOptional()
  @Field(() => PollListRelationFilter, {
    nullable: true,
  })
  polls?: PollListRelationFilter;
}

export { PollOptionWhereInput as PollOptionWhereInput };
