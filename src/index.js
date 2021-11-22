const takeRandomAds = (n) => {
  let len = ADS.length;
  let shuf = ADS.sort(() => 0.5 - Math.random());
  let res = [];
  for (var i = 0; i < n; i++) {
    res.push(shuf[i % len].trim());
  }
  return res;
};
const addAd = (html) => {
  document.querySelectorAll(".column").forEach((e) => {
    let ad = document.createElement("div");
    ad.className = "ad";
    ad.innerHTML = html;
    Math.random() > 0.5 ? e.appendChild(ad) : null;
  });
};
const addAds = (n) => {
  let ads = takeRandomAds(n);
  for (var i = 0; i < n; i++) {
    addAd(ads[i]);
  }
};
var main = () => {
  console.log(1);
  window.onload = function () {
    addAds(30);
  };
  window.addEventListener(
    "scroll",
    function () {
      let d = document.documentElement;
      if (d.scrollTop + d.clientHeight >= d.scrollHeight / 2) {
        addAds(30);
      }
    },
    true
  );
};
