import JSZip from "jszip";

function createFolder(name: String) {

}


function readContentsFromFolder(files: {[key: string]: any}) {
    Object.keys(files).forEach(function(fileName) {
        files[fileName].async('string').then(function (fileData: any) {
            console.log(fileData);
            // 폴더일 때랑 파일일 때 나눠서 로직 처리 해야함. 
        })
    })
}

export function readContentsFromZipFolder(folder: File) {
    let zip = new JSZip();

    zip.loadAsync(folder!).then(function(zip) {
        console.log(typeof(zip.files));
       readContentsFromFolder(zip.files);
    })

  
}
export default createFolder;