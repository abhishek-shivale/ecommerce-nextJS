"use client";
import React from "react";
import UploadCareButton from "./Uploadcare"
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";


const ProfilePicture = ({ onUpload }:any) => {

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
         <UploadCareButton onUpload={onUpload} />
      </div>
    </div>
  );
};

export default ProfilePicture;
