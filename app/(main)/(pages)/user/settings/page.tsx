"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { UserEmail } from "@/lib/User"
import { prisma } from "@/lib/prisma"
import ProfilePicture from "./Profile-Picture"


export default function Component() {
  // if (!UserEmail) return null;

  const user = {
    avatar:
      "https://ucarecdn.com/36e789c7-af4f-4b39-8083-aae5b6617fd9/example-image.jpg",
  };
  const removeProfileImage = async() =>{
  }

   const uploadProfileImage = async () => {
    
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
            <Input id="name" placeholder="Enter your name" />
          </div>
          <fieldset>
            <legend className="text-sm font-medium leading-none">
              Profile Image
            </legend>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              JPG, PNG. Max file size 10MB.
            </p>
            <div className="flex gap-5 mx-6">
              <div className="mt-5">
                <img
                  alt="Profile Image"
                  className="rounded-full"
                  height="96"
                  src="/next.svg"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width="96"
                />
              </div>
              <div className="mx-8">
                {/* <Button variant="outline" 
                onClick={async()=>{
                  await uploadIages()
                }} 
                >
                  Upload
                  <input className="sr-only" id="file" type="file" />
                </Button> */}
                <ProfilePicture
                onUpload={uploadProfileImage}
                />
              </div>
            </div>
          </fieldset>
          <div className="space-y-2">
            <Label className="font-semibold" htmlFor="address">
              Address
            </Label>
            <Input id="address" placeholder="Enter your address" />
          </div>
          <Button className="w-full" type="submit">
            Save
          </Button>
        </CardContent>
        <CardFooter>
          {/* <Alert variant="default">
            Your settings have been saved successfully.
          </Alert> */}
        </CardFooter>
      </Card>
    </div>
  );
}
