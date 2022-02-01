import { PrismaClient } from "@prisma/client";
import { Query, Resolver } from "type-graphql";
import PostType from "./types/PostType";
import UserType from "./types/UserType";

@Resolver()
export class User {
  @Query(() => [UserType])
  async users(): Promise<UserType[]> {
    const prismaClient = new PrismaClient();

    const users = (await prismaClient.user.findMany({
      include: { posts: true },
    })) as UserType[];

    return users;
  }

  @Query(() => [PostType])
  async posts(): Promise<PostType[]> {
    const prismaClient = new PrismaClient();

    const posts = (await prismaClient.post.findMany({
      include: { author: true },
    })) as PostType[];

    return posts;
  }
}
