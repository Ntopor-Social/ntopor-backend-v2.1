/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MediaWhereUniqueInput } from "../../media/base/MediaWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MediaCreateNestedManyWithoutMessagesInput {
  @Field(() => [MediaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MediaWhereUniqueInput],
  })
  connect?: Array<MediaWhereUniqueInput>;
}

export { MediaCreateNestedManyWithoutMessagesInput as MediaCreateNestedManyWithoutMessagesInput };
