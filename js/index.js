function dePurge(url) {
  fetch(`https://archive.org/wayback/available?url=${url}&timestamp=20180000`).then(x=>x.text()).then(y=>{
    depurged = "https://"+JSON.parse(y)["archived_snapshots"]["closest"]["url"].slice(7)
    document.getElementById("urlout").innerHTML="Here is your depurged URL: <a href=\""+depurged+"\">"+depurged+"</a><br><br><b>NOTE: THIS MAY NOT WORK.</b> Currently it just uses the archive.org api to get a snapshot of the video from before the purge. I am working on getting the actual MP4 download link currently"
  });
}

document.getElementById("go").onclick = () => {
  dePurge(document.getElementById("urlin").value);
}
