export const getWeather = async (req, res) => {
  const { lat, lon } = req.body;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`
  );
  const resData = await response.json();
  const flag = resData.sys.country.toLowerCase();
  return res.status(200).json({
    success: true,
    message: "Data Fetched Successfully",
    resData: {
      name: resData.name,
      desc: resData?.weather?.[0]?.description,
      flag,
      weatherIcon: resData?.weather?.[0]?.icon,
      temp: resData?.main?.temp,
      wind: resData?.wind?.speed,
      humidity: resData?.main?.humidity,
      clouds: resData?.clouds?.all,
    },
  });
};

export const searchWeather = async (req, res) => {
  const { city } = req.body;

  if (!city) {
    return res.status(404).json({
      success: false,
      message: "Please Enter City Name",
    });
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
  );
  const resData = await response.json();

  if (resData.cod === "404") {
    return res.status(404).json({
      success: false,
      message: "Invalid City Name",
    });
  } else if (resData.cod === "400") {
    return res.status(404).json({
      success: false,
      message: "Please Enter City Name",
    });
  }

  const flag = resData.sys.country.toLowerCase();

  return res.status(200).json({
    success: true,
    message: "Data Fetched Successfully",
    resData: {
      name: resData.name,
      desc: resData?.weather?.[0]?.description,
      flag,
      weatherIcon: resData?.weather?.[0]?.icon,
      temp: resData?.main?.temp,
      wind: resData?.wind?.speed,
      humidity: resData?.main?.humidity,
      clouds: resData?.clouds?.all,
    },
  });
};
