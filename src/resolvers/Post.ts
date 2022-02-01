import { Post, PrismaClient } from "@prisma/client";
import { Query, Resolver } from "type-graphql";
import PostType from "./types/PostType";

@Resolver()
export default class PostResolver {
  prismaClient = new PrismaClient();

  @Query(() => [PostType])
  async posts(): Promise<Post[]> {
    const posts = await this.prismaClient.post.findMany({
      include: { author: true },
    });

    return posts;
  }
}
