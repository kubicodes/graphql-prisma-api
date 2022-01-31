import { PrismaClient } from "@prisma/client";
import { Query, Resolver } from "type-graphql";
import UserType from "./types/UserType";

@Resolver()
export class User {
  @Query(() => [UserType])
  async users() {
    const prismaClient = new PrismaClient();

    const users = await prismaClient.user.findMany();

    return users;
  }
}
