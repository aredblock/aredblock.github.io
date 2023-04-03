// Holen Sie sich die <a> Elemente
const universalDownloadLink = document.getElementById("universalDownload");
const windowsDownloadLink = document.getElementById("windowsDownload");

// Fügen Sie dem Universal-Installer-Link einen Event Listener hinzu
universalDownloadLink.addEventListener("click", function(event) {
  event.preventDefault(); // Verhindern Sie das Standardverhalten des Links
  console.log("Universal Installer wird heruntergeladen"); // Fügen Sie hier Ihren Code hinzu, um den Universal Installer herunterzuladen
});

// Fügen Sie dem Windows-Installer-Link einen Event Listener hinzu
windowsDownloadLink.addEventListener("click", function(event) {
  event.preventDefault(); // Verhindern Sie das Standardverhalten des Links
  console.log("Windows Installer wird heruntergeladen"); // Fügen Sie hier Ihren Code hinzu, um den Windows Installer herunterzuladen
});