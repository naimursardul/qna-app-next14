"use client";

import { app } from "@/lib/firebase";
import { generateFileName, toastProps } from "@/lib/utilities";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function UploadImg({ props }) {
  const { setImgs, imgs, isMultiple } = props;
  const [files, setFiles] = useState(null);
  const [fileProp, setFileProp] = useState(null);

  //   ON CHANGE
  function onInputChange(e) {
    setFileProp(null);
    setImgs(null);

    let allFiles = [];
    let urlArr = [];

    if (e.target.files) {
      for (const [index, file] of Object.entries(e.target.files)) {
        urlArr.push({ url: URL.createObjectURL(file) });
        allFiles.push(file);
      }
      setFiles(allFiles);
      setFileProp(urlArr);
    }
  }

  //   UPLOAD
  const handleImgUpload = async () => {
    const imgUrls = [];
    if (files && files[0]) {
      for (let index = 0; index < files?.length; index++) {
        const file = files[index];
        const fileName = generateFileName(file.name);
        const storage = getStorage(app);
        const metadata = {
          contentType: "image/jpeg",
        };

        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");

            const fileDetails = [...fileProp];
            fileDetails[index].progress = progress;
            setFileProp(fileDetails);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            switch (error.code) {
              case "storage/unauthorized":
                console.log(
                  "User doesn't have permission to access the object"
                );
                break;
              case "storage/canceled":
                console.log("User canceled the upload");
                break;

              // ...

              case "storage/unknown":
                console.log(
                  "Unknown error occurred, inspect error.serverResponse"
                );
                break;
            }
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            console.log("File available at", downloadURL);

            imgUrls.push(downloadURL);

            if (imgUrls[files?.length - 1]) {
              setImgs(imgUrls);
            }
          }
        );
      }
    }
  };

  console.log(fileProp);

  //   REMOVE FILE
  const removeFile = (i) => {
    if (files && fileProp) {
      const allFiles = [...files];
      const allProp = [...fileProp];

      allProp.splice(i, 1);
      allFiles.splice(i, 1);

      setFiles(allFiles);
      setFileProp(allProp);
    }
  };

  return (
    <div className="flex gap-3 flex-col ">
      <div className="flex gap-3 justify-start items-center">
        <label htmlFor="sub" className="font-semibold text-[--textSoft]">
          Image:
        </label>

        <input
          onChange={onInputChange}
          type="file"
          accept="image/*"
          name="img"
          multiple={isMultiple}
          className=" text-sm text-[--textSoft] bg-[--bgSofter] "
        />
        <div
          onClick={handleImgUpload}
          className="px-2 py-1 rounded-md  bg-[--btnSoft] text-[--bgSoft] hover:text-[--text] cursor-pointer"
        >
          Upload
        </div>
      </div>
      <div className="flex gap-5 flex-wrap">
        {fileProp &&
          fileProp.map((file, index) => (
            <div key={index} className="relative">
              <Image src={file?.url} height={70} width={70} alt="" />
              {file?.progress != undefined && (
                <div className="w-full text-center bg-[--bgSofter] text-sm text-[--textSoft]">
                  {file?.progress === 100
                    ? "Done"
                    : Math.floor(file?.progress) + "%"}
                </div>
              )}
              {!file?.progress && (
                <MdCancel
                  className="absolute -right-3 -top-3 text-[--text] cursor-pointer"
                  onClick={() => removeFile(index)}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
