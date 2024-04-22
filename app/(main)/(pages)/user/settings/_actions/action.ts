// import "server-only"
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth"
//import { revalidatePath } from "next/cache";

async function getUser() {
  const session = await getServerSession();
  return session;
}

async function Home() {
  const session = await getUser();
  return session
}
export const removeProfileImage = async () => {
    const session = await Home()
   const SessionEmail = session?.user?.email 
 if (!SessionEmail) {
    return;
  }
  const response = await prisma.user.update({
    where: {
      email: SessionEmail,
    },
    data: {
      avatar: " ",
    },
  });
  return response;
};

export const uploadProfileImage = async (image: string) => {
   const session = await Home()
   const SessionEmail = session?.user?.email 
  if (!SessionEmail) {
    return;
  }
  const response = await prisma.user.update({
    where: {
      email: SessionEmail,
    },
    data: {
      avatar: image,
    },
  });
  return response;
};

export const onclickHandler = async (name:string) => {
  const session = await Home();
  const SessionEmail = session?.user?.email; 
  if (!SessionEmail) {
    return;
  }
  const response = await prisma.user.update({
    where: {
      email: SessionEmail,
    },
    data: {
      name: name,
    },
  });
  return response;
};