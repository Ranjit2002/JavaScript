async function Ranjit() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg");
    }, 2000);
  });

  let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 deg");
    }, 5000);
  });

  //   delhiWeather.then(alert)
  //   bangloreWeather.then(alert)

  console.log("Fetching Delhi Weather please wait...");
  let delhiW = await delhiWeather;
  console.log("Fetched Delhi Weather :" + delhiW);
  console.log("Fetching Banglore Weather please wait...");
  let bangloreW = await bangloreWeather;
  console.log("Fetched Banglore Weather :" + bangloreW);
  return [delhiW, bangloreW];
}

const cherry = async () => {
  console.log("Hey I am cherry and I am waiting");
};

const main = async () => {
  console.log("Welcome to weather control room");
  let a = await Ranjit();
  let b = await cherry();
};

main();
