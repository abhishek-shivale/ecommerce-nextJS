"use server"
import { prisma } from "./prisma";

export async function DBuser(session:any) {
  if (!session?.user?.email) {
    return;
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
  });
  return user;
}
