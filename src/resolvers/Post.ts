import { Post, PrismaClient } from "@prisma/client";
import { Query, Resolver } from "type-graphql";
import PostType from "./types/PostType";

@Resolver()
export default class PostResolver {
  @Query(() => [PostType])
  async posts(): Promise<Post[]> {
    const prismaClient = new PrismaClient();

    const posts = await prismaClient.post.findMany({
      include: { author: true },
    });

    return posts;
  }
}
