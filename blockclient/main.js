const failed = document.getElementById('failed');
const windowsDownload = document.getElementById('windowsDownload');

failed.addEventListener('click', (e) => {
    console.log("failed");
    alert("CommingSoon!");
})

windowsDownload.addEventListener('click', (e) => {
    console.log("Start download!")
    window.open('https://workupload.com/file/CX2XevFDdnd', '_blank', 'height=600px, width=700px');
    alert("Danke für den Download :D")
})
