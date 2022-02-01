import { PrismaClient, User } from "@prisma/client";
import { Query, Resolver } from "type-graphql";
import UserType from "./types/UserType";

@Resolver()
export default class UserResolver {
  prismaClient = new PrismaClient();

  @Query(() => [UserType])
  async users(): Promise<User[]> {
    const users = await this.prismaClient.user.findMany({
      include: { posts: true },
    });

    return users;
  }
}
