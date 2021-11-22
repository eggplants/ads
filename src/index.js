const takeRandomAds = (n) => {
  let len = ADS.length;
  let shuf = ADS.sort(() => 0.5 - Math.random());
  let res = [];
  for (var i = 0; i < n; i++) {
    res.push(shuf[i % len].trim());
  }
  return res;
};
const addAds = (n) => {
  document.querySelectorAll(".column").forEach((e) => {
    let r = takeRandomAds(n);
    for (var i = 0; i < n; i++) {
      let ad = document.createElement("div");
      ad.className = "ad";
      ad.innerHTML = r[i % n];
      e.appendChild(ad);
    }
  });
};
var main = () => {
  console.log(1);
  window.onload = function () {
    addAds(50);
  };
  window.addEventListener(
    "scroll",
    function () {
      let d = document.documentElement;
      if (d.scrollTop + d.clientHeight >= d.scrollHeight / 2) {
        addAds(50);
      }
    },
    true
  );
};
