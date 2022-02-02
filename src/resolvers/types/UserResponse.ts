import { User } from "@prisma/client";
import { Field, ObjectType } from "type-graphql";
import ErrorResponse from "./ErrorResponse";
import UserType from "./UserType";

@ObjectType()
export default class UserResponse {
  @Field(() => [UserType], { nullable: true })
  users?: User[];

  @Field(() => [ErrorResponse], { nullable: true })
  errors?: ErrorResponse[];
}
