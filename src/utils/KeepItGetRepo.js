const KeepItGit = "https://api.github.com/repos/0xlibless/KeepIt/releases/latest";

async function getLatestRelease() {
  const res = await fetch(KeepItGit);
  if (!res.ok) throw new Error("No se pudo obtener el release");
  const data = await res.json();
  return data.tag_name;
}

async function getLatestApkUrl() {
  const res = await fetch(KeepItGit);
  if (!res.ok) throw new Error("No se pudo obtener el release");
  const release = await res.json();
  const apk = release.assets.find(asset =>
    asset.name.toLowerCase().endsWith(".apk")
  );
  return apk ? apk.browser_download_url : null;
}

export { getLatestRelease, getLatestApkUrl };