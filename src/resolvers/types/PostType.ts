import { Field, Int, ObjectType } from "type-graphql";
import UserType from "./UserType";

@ObjectType()
export default class PostType {
  @Field(() => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  title: string;

  @Field(() => UserType)
  author: UserType;

  @Field(() => String, { nullable: true })
  content?: string;
}
