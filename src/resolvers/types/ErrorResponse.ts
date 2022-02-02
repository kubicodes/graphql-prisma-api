import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class ErrorResponse {
  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => String, { nullable: true })
  field?: string;
}
