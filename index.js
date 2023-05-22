const forecast = async (location) => {
  try {
    const forecastData = await fetch(`http://api.weatherapi.com/v1/current.json?key=a8f16b8f827948f99f2214058232005&q=${location}&aqi=no`)
    const data = await forecastData.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

forecast('Manzanillo, col')