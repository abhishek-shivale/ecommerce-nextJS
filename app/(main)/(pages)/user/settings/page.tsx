"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserImage } from "@/lib/User";
import { prisma } from "@/lib/prisma";
import { useSession } from "next-auth/react";
import { useState } from "react";
import ProfilePicture from "./Profile-Picture";

export default function Component() {
  const [name, setname] = useState("");
  const { data: session } = useSession();
  const SessionEmail = session?.user?.email;

  const removeProfileImage = async () => {
    "use server"
    if (!SessionEmail) {
      return;
    }
    const response = await prisma.user.update({
      where: {
        email: SessionEmail,
      },
      data: {
        avatar: "",
      },
    });
    return response;
  };

  const uploadProfileImage = async (image: string) => {
    'use server'
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

  const onclickHandler = async () => {
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

  return (
    <div className="flex w-full justify-center">
      <Card className="w-full max-w-2xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Settings</CardTitle>
          <CardDescription>Update your account settings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="font-semibold" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <fieldset>
            <legend className="text-sm font-medium leading-none">
              Profile Image
            </legend>
            <p className="text-sm text-gray-500 my-4 dark:text-gray-400">
              JPG, PNG. Max file size 10MB.
            </p>
            <div className="flex gap-5 mx-6">
              <div className="mt-5">
                <UserImage />
              </div>
              <div className="mx-8 ">
                <Button
                  onClick={removeProfileImage}
                  className="bg-gray-200 px-6 py-2 h-7 text-black hover:bg-gray-300">
                  Remove photo
                </Button>
                <ProfilePicture onUpload={uploadProfileImage} />
              </div>
            </div>
          </fieldset>
          {/* <div className="space-y-2">
            <Label className="font-semibold" htmlFor="address">
              Address
            </Label>
            <Input id="address" placeholder="Enter your address" />
          </div> */}
          <Button onClick={onclickHandler} className="w-full" type="submit">
            Save
          </Button>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
