"use client";

import { app } from "@/lib/firebase";
import { generateFileName } from "@/lib/utilities";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";

export default function UploadImg({ setImgs }) {
  const [files, setFiles] = useState(null);
  const [fileUrls, setFileUrls] = useState(null);
  const [progressPercent, setProgressPercent] = useState(undefined);

  //   ON CHANGE
  function onInputChange(e) {
    setProgressPercent(undefined);

    let allFiles = e.target.files;
    let urlArr = [];

    if (allFiles) {
      setFiles(allFiles);
      for (const [index, file] of Object.entries(allFiles)) {
        const fileName = generateFileName(file.name);
        urlArr.push(URL.createObjectURL(file));
      }
      setFileUrls(urlArr);
    }
  }

  //   UPLOAD
  const handleImgUpload = () => {
    let imgUrls = [];
    if (files) {
      for (const [index, file] of Object.entries(files)) {
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
            setProgressPercent(progress);
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
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              imgUrls.push(downloadURL);
            });
          }
        );
      }
    }
    console.log(imgUrls);
    setImgs(imgUrls);
  };

  //   REMOVE FILE
  const removeFile = (i) => {
    if (files && fileUrls) {
      const allFiles = [...files];
      const allUrls = [...fileUrls];

      allUrls.splice(i, 1);
      allFiles.splice(i, 1);

      setFiles(allFiles);
      setFileUrls(allUrls);
    }
  };

  console.log(fileUrls);
  console.log(files);
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
          multiple
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
        {fileUrls &&
          fileUrls.map((url, index) => (
            <div className="relative">
              <Image src={url} height={70} width={70} alt="" />
              {progressPercent && (
                <div className="w-full text-center bg-[--bgSofter] text-sm text-[--textSoft]">
                  {progressPercent === 100
                    ? "Done"
                    : Math.floor(progressPercent) + "%"}
                </div>
              )}
              {!progressPercent && (
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
