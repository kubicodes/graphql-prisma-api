import { PrismaClient } from "@prisma/client";
import { Query, Resolver } from "type-graphql";
import PostResponse from "./types/PostResponse";

@Resolver()
export default class PostResolver {
  prismaClient = new PrismaClient({ log: ["query", "info", "error"] });

  @Query(() => PostResponse)
  async posts(): Promise<PostResponse> {
    try {
      const posts = await this.prismaClient.post.findMany({
        include: { author: true },
      });

      return { posts };
    } catch (error) {
      return { errors: [{ message: "Error while fetching posts" }] };
    }
  }
}
