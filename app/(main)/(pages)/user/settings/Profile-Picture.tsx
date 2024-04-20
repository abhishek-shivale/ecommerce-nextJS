"use client";
import UploadCareButton from "./Uploadcare";



const ProfilePicture = ({ onUpload }:any) => {

  return (
    <div className="flex flex-col my-8">     
         <UploadCareButton onUpload={onUpload} />
    </div>
  );
};

export default ProfilePicture;
