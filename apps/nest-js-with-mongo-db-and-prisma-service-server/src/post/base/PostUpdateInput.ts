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
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsBoolean,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { LikeUpdateManyWithoutPostsInput } from "./LikeUpdateManyWithoutPostsInput";
import { EnumPostLinkedEventType } from "./EnumPostLinkedEventType";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { MediaUpdateManyWithoutPostsInput } from "./MediaUpdateManyWithoutPostsInput";
import { PollingUpdateManyWithoutPostsInput } from "./PollingUpdateManyWithoutPostsInput";
import { ReportUpdateManyWithoutPostsInput } from "./ReportUpdateManyWithoutPostsInput";
import { ShareUpdateManyWithoutPostsInput } from "./ShareUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class PostUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutPostsInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutPostsInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutPostsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

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
  hashtags?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isBlocked?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isEvent?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isMedia?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPolling?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPromoted?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isVoteEvent?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => LikeUpdateManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => LikeUpdateManyWithoutPostsInput)
  @IsOptional()
  @Field(() => LikeUpdateManyWithoutPostsInput, {
    nullable: true,
  })
  likes?: LikeUpdateManyWithoutPostsInput;

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
  linkedEvent?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPostLinkedEventType,
  })
  @IsEnum(EnumPostLinkedEventType)
  @IsOptional()
  @Field(() => EnumPostLinkedEventType, {
    nullable: true,
  })
  linkedEventType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => LocationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocationWhereUniqueInput)
  @IsOptional()
  @Field(() => LocationWhereUniqueInput, {
    nullable: true,
  })
  location?: LocationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MediaUpdateManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => MediaUpdateManyWithoutPostsInput)
  @IsOptional()
  @Field(() => MediaUpdateManyWithoutPostsInput, {
    nullable: true,
  })
  mediaItems?: MediaUpdateManyWithoutPostsInput;

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
  mentioned?: string | null;

  @ApiProperty({
    required: false,
    type: () => PollingUpdateManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => PollingUpdateManyWithoutPostsInput)
  @IsOptional()
  @Field(() => PollingUpdateManyWithoutPostsInput, {
    nullable: true,
  })
  pollings?: PollingUpdateManyWithoutPostsInput;

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
  postDescription?: string | null;

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
  postType?: string | null;

  @ApiProperty({
    required: false,
    type: () => ReportUpdateManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => ReportUpdateManyWithoutPostsInput)
  @IsOptional()
  @Field(() => ReportUpdateManyWithoutPostsInput, {
    nullable: true,
  })
  reports?: ReportUpdateManyWithoutPostsInput;

  @ApiProperty({
    required: false,
    type: () => ShareUpdateManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => ShareUpdateManyWithoutPostsInput)
  @IsOptional()
  @Field(() => ShareUpdateManyWithoutPostsInput, {
    nullable: true,
  })
  shares?: ShareUpdateManyWithoutPostsInput;

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
  tagged?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { PostUpdateInput as PostUpdateInput };
