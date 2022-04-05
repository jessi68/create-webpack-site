import "./UploadFolder.css";
import React, { useState } from "react";
import JSZip from "jszip";

function UploadFolder() {
    const [selectedFolder, setSelectedFolder] = useState<File>();
    let folderName = "";

    const unZipFolder =  (folder: File) => {
        let zip = new JSZip();
        let exampleFile: any;
        console.log(folder);
        folderName = folder.name;

        const reader = new FileReader();

        zip.loadAsync(folder!).then(function(zip) {
              exampleFile = zip.files[0];
              console.log(exampleFile);
              console.log(zip);  
        }).then(() => {
            reader.readAsText(exampleFile);
        });


    }

    const onFileChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
        unZipFolder(event.target.files![0]);
        setSelectedFolder(event.target.files![0]);
    }

    return (<section>
           <div>압축 폴더를 올려주세요. 

           </div>
             <input type="file" onChange={onFileChange}></input>
           </section>);
}

export default UploadFolder;