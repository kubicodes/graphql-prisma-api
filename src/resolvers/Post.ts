import { PrismaClient } from "@prisma/client";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import ErrorResponse from "./types/ErrorResponse";
import PostInput from "./types/PostInput";
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

  @Mutation(() => PostResponse)
  async create(
    @Arg("postInput", () => PostInput) postInput: PostInput
  ): Promise<PostResponse> {
    let errors: ErrorResponse[] = [];

    if (!postInput.title) {
      errors = [{ field: "title", message: "title cannot be empty" }];
    }

    if (!postInput.content) {
      errors = [
        ...errors,
        { field: "content", message: "content cannot be empty" },
      ];
    }

    if (!postInput.authorId) {
      errors = [
        ...errors,
        { field: "authorId", message: "author cannot be empty" },
      ];
    }

    if (errors.length) {
      return { errors };
    }

    try {
      const createdPost = await this.prismaClient.post.create({
        data: {
          content: postInput.content,
          authorId: postInput.authorId,
          title: postInput.title,
        },
      });

      return { posts: [createdPost] };
    } catch (error) {
      return { errors: [{ message: "Error while creating post" }] };
    }
  }
}
