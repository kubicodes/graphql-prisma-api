import { PrismaClient, User } from "@prisma/client";
import { Query, Resolver } from "type-graphql";
import UserType from "./types/UserType";

@Resolver()
export default class UserResolver {
  @Query(() => [UserType])
  async users(): Promise<User[]> {
    const prismaClient = new PrismaClient();

    const users = await prismaClient.user.findMany({
      include: { posts: true },
    });

    return users;
  }
}
