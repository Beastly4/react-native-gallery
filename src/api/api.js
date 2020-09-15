const URL =
  "https://api.unsplash.com/photos/?client_id=tCdVGtO8jGpBL3JxrGUYoLCVpVOuI5VXd1TfMjkMz8g";
export default async function response() {
  let response = await fetch(URL);
  let rJson = await response.json();

  //   console.log(rJson);
  return rJson;
}
