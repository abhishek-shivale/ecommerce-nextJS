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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UploadCareButton from "./Uploadcare";
import { onclickHandler, removeProfileImage, uploadProfileImage } from "./_actions/action";

export default function Component() {
  const [name, setname] = useState("");
  const router = useRouter()
 
  useEffect(()=>{
    router.refresh()
  },[uploadProfileImage, removeProfileImage])
  
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
                <div className="flex flex-col my-6">
                <UploadCareButton onUpload={uploadProfileImage} />
                </div>
              </div>
            </div>
          </fieldset>
          <Button
            onClick={() => {
              onclickHandler(name);
            }}
            className="w-full"
            type="submit">
            Save
          </Button>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
