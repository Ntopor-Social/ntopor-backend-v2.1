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
import { DeviceInfoWhereUniqueInput } from "./DeviceInfoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeviceInfoFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => DeviceInfoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DeviceInfoWhereUniqueInput)
  @Field(() => DeviceInfoWhereUniqueInput, { nullable: false })
  where!: DeviceInfoWhereUniqueInput;
}

export { DeviceInfoFindUniqueArgs as DeviceInfoFindUniqueArgs };
