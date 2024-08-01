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
import { RedeemWhereInput } from "./RedeemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RedeemOrderByInput } from "./RedeemOrderByInput";

@ArgsType()
class RedeemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RedeemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RedeemWhereInput, { nullable: true })
  @Type(() => RedeemWhereInput)
  where?: RedeemWhereInput;

  @ApiProperty({
    required: false,
    type: [RedeemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RedeemOrderByInput], { nullable: true })
  @Type(() => RedeemOrderByInput)
  orderBy?: Array<RedeemOrderByInput>;

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

export { RedeemFindManyArgs as RedeemFindManyArgs };
