import { Field, Int, ObjectType } from "type-graphql";
import PostType from "./PostType";

@ObjectType()
export default class UserType {
  @Field(() => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  email: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [PostType], { nullable: true })
  posts?: PostType[];
}
