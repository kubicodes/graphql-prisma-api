import { PrismaClient } from "@prisma/client";
import { Query, Resolver } from "type-graphql";
import UserResponse from "./types/UserResponse";
@Resolver()
export default class UserResolver {
  prismaClient = new PrismaClient({ log: ["query", "info", "error"] });

  @Query(() => UserResponse)
  async users(): Promise<UserResponse> {
    try {
      const users = await this.prismaClient.user.findMany({
        include: { posts: true },
      });

      return { users };
    } catch (error) {
      console.error(error.message);

      return { errors: [{ message: "Error while fetching users" }] };
    }
  }

}
