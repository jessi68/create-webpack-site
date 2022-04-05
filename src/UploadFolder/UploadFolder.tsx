import "./UploadFolder.css";
import React, { useState } from "react";

function UploadFolder() {
    const [selectedFolder, setSelectedFile] = useState<Blob>();

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(event.target.files![0]);
    }

    return (<section>
           <div>압축 폴더를 올려주세요. 
               
           </div>
             <input type="file" onChange={onFileChange}></input>
           </section>);
}

export default UploadFolder;