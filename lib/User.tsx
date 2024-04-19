"use client"
import { useSession } from "next-auth/react";

 const { data: session } = useSession();

 export const UserEmail = session?.user?.email

 

