import "./UploadFolder.css";
import React, { useState } from "react";
import JSZip from "jszip";
import { readContentsFromZipFolder } from "../util/folderAndFile";

function UploadFolder() {
    const [selectedFolder, setSelectedFolder] = useState<File>();
    let folderName = "";

    const unZipFolder = async (folder: File) => {
       readContentsFromZipFolder(folder);
    }

    const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        await unZipFolder(event.target.files![0]);
        setSelectedFolder(event.target.files![0]);
    }

    return (<section>
           <div>압축 폴더를 올려주세요. 

           </div>
             <input type="file" onChange={onFileChange}></input>
           </section>);
}

export default UploadFolder;