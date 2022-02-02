import { Post } from "@prisma/client";
import { Field, ObjectType } from "type-graphql";
import ErrorResponse from "./ErrorResponse";
import PostType from "./PostType";

@ObjectType()
export default class PostResponse {
  @Field(() => [PostType], { nullable: true })
  posts?: Post[];

  @Field(() => [ErrorResponse], { nullable: true })
  errors?: ErrorResponse[];
}
