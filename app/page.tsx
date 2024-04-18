"use client"
import Navbar from "@/components/global/Navbar";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signOut, signIn, useSession } from "next-auth/react";
export default function  Component() {
    const { data: session } = useSession();


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="grid gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center lg:gap-8"></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* product card */}
            <div>
              {session && session.user ? (
                <button onClick={() => signOut()}>Sign out</button>
              ) : (
                <button onClick={() => signIn()}>Sign in</button>
              )}
            </div>{" "}
            <div>
              {session?.user?.name}
              <br />
              {session?.user?.image}
              <br />
              {session?.user?.email}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


