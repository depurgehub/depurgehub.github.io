function dePurge(url) {
  fetch(`https://archive.org/wayback/available?url=${url}&timestamp=20180000`).then(x=>x.text()).then(y=>{
    document.getElementById("urlout").textContent="Here is your depurged URL: https://"+JSON.parse(y)["archived_snapshots"]["closest"]["url"].slice(7)+"\n\nNOTE: THIS MAY NOT WORK. Currently it just uses the archive.org api to get a snapshot of the video from before the purge. I am working on getting the actual MP4 download link currently"
  });
}

document.getElementById("go").onclick = () => {
  dePurge(document.getElementById("urlin").value);
}
