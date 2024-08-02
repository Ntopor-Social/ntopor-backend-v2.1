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

import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsEnum,
  IsBoolean,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";
import { EnumEventEventPriceType } from "./EnumEventEventPriceType";
import { EnumEventEventType } from "./EnumEventEventType";
import { MediaCreateNestedManyWithoutEventsInput } from "./MediaCreateNestedManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { TicketPackageCreateNestedManyWithoutEventsInput } from "./TicketPackageCreateNestedManyWithoutEventsInput";
import { TicketCreateNestedManyWithoutEventsInput } from "./TicketCreateNestedManyWithoutEventsInput";

@InputType()
class EventCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  accumulated?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  balance?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateCreated?: Date | null;

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
  eventBio?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  eventDate?: Date | null;

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
  eventLink?: string | null;

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
  eventLocation?: string | null;

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
  eventName?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumEventEventPriceType,
  })
  @IsEnum(EnumEventEventPriceType)
  @IsOptional()
  @Field(() => EnumEventEventPriceType, {
    nullable: true,
  })
  eventPriceType?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumEventEventType,
  })
  @IsEnum(EnumEventEventType)
  @IsOptional()
  @Field(() => EnumEventEventType, {
    nullable: true,
  })
  eventType?: "Option1" | null;

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
  featuredImage?: string | null;

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
  galerry?: string | null;

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
  gallery?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isFeatured?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPrivate?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isTicketAvailable?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => MediaCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => MediaCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => MediaCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  mediaItems?: MediaCreateNestedManyWithoutEventsInput;

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
  organizer?: UserWhereUniqueInput | null;

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
  ticketAvailableCount?: string | null;

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
  ticketCount?: string | null;

  @ApiProperty({
    required: false,
    type: () => TicketPackageCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => TicketPackageCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => TicketPackageCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  ticketPackages?: TicketPackageCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: false,
    type: () => TicketCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => TicketCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => TicketCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  tickets?: TicketCreateNestedManyWithoutEventsInput;

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
  ticketsSold?: string | null;
}

export { EventCreateInput as EventCreateInput };
