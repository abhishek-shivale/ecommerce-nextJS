"use client"

import { useSession } from "next-auth/react";
import { prisma } from "./prisma";
import { useEffect, useState } from "react";
import { DBuser } from "./UserServer";

export const UserProfileImage = "https://imgs.search.brave.com/wyUnO7vWlbdZbsfbPH93cnexLMrKB1tiqFbplF2dFXg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29pbmRlc2suY29t/L3Jlc2l6ZXIvWHR0/ZGlRUC1TQnFEaUlo/SXBydzdlWTYzN0Jr/PS9maWx0ZXJzOnF1/YWxpdHkoODApOmZv/cm1hdChqcGcpL2Ns/b3VkZnJvbnQtdXMt/ZWFzdC0xLmltYWdl/cy5hcmNwdWJsaXNo/aW5nLmNvbS9jb2lu/ZGVzay9IU0VJTVNO/UEdCRElUTkVTMlJY/V1k0VEs0US5qcGc"

export function UserImage (){
    const { data: session } = useSession();
    const [user, setUser] = useState<any>()

   async function fetch() {
     const x = await DBuser(session);
     setUser(x);
   }
  useEffect(() => {
   fetch()
  }, [session]);

  
  return (
    <>
      <img
        src={user ? user?.avatar : `${UserProfileImage} `}
        className="h-full"
      />
      {console.log(user)}
      <div></div>
    </>
  );
}