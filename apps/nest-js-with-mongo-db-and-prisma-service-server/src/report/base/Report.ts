/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "../../comment/base/Comment";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Post } from "../../post/base/Post";
import { EnumReportTypeField } from "./EnumReportTypeField";
import { User } from "../../user/base/User";

@ObjectType()
class Report {
  @ApiProperty({
    required: false,
    type: () => Comment,
  })
  @ValidateNested()
  @Type(() => Comment)
  @IsOptional()
  comment?: Comment | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateCreated!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  meta!: string | null;

  @ApiProperty({
    required: false,
    type: () => Post,
  })
  @ValidateNested()
  @Type(() => Post)
  @IsOptional()
  post?: Post | null;

  @ApiProperty({
    required: false,
    enum: EnumReportTypeField,
  })
  @IsEnum(EnumReportTypeField)
  @IsOptional()
  @Field(() => EnumReportTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { Report as Report };
