import { Field, InputType, Int } from "type-graphql";

@InputType()
export default class PostInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => Int)
  authorId: number;
}
