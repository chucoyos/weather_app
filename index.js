const forecast = async (location = 'Manzanillo, Col.') => {
  try {
    const forecastData = await fetch(`http://api.weatherapi.com/v1/current.json?key=a8f16b8f827948f99f2214058232005&q=${location}&aqi=no`)
    const data = await forecastData.json()
    console.log(data)
    renderforecastData(data)
  } catch (error) {
    console.log(error)
  }
}

const renderforecastData = (data) => {
  console.log(data.current.is_day)
  const body = document.querySelector('body')
  if(data.current.is_day == 1) {
    body.style.backgroundImage = 'url("./images/sunySky.jpg")'
  } else {
    body.style.backgroundImage = 'url("./images/moonSky.jpg")'
  }
  const header = document.querySelector('.header')
  header.classList.add('.header')

  const locationContainder = document.createElement('p')
  locationContainder.classList.add('.locationContainer')
  locationContainder.textContent = `${data.location.name} 📌️`
 
  const tempContainer = document.createElement('p')
  tempContainer.classList.add('.tempContainer')
  tempContainer.textContent = data.current.temp_c + " \260C  /  " + data.current.temp_f + " \260F" 

  const conditionContainer = document.createElement('p')
  conditionContainer.classList.add('.conditionContainer')
  conditionContainer.textContent = data.current.condition.text

  const conditionImage = document.createElement('img')
  conditionImage.src = data.current.condition.icon

  header.appendChild(locationContainder)
  header.appendChild(tempContainer)
  header.appendChild(conditionImage)
  header.appendChild(conditionContainer)

  const confortCard = document.querySelector('.confortCard')

  const confortHeader = document.createElement('header')
  confortHeader.classList.add('.confortHeader')

  const confortTitle = document.createElement('p')
  confortTitle.classList.add('.confortTitle')
  confortTitle.textContent = 'CONFORT LEVEL'
  const humidityText = document.createElement('p')
  humidityText.classList.add('.humidityText')
  humidityText.textContent = `Humidity: ${data.current.humidity} %`
  const humidityIcon = document.createElement('p')
  humidityIcon.classList.add('.humidityIcon')
  humidityIcon.textContent = '💦️'

  confortHeader.appendChild(confortTitle)
  confortCard.appendChild(confortHeader)
  confortCard.appendChild(humidityIcon)
  confortCard.appendChild(humidityText)

  const windCard = document.querySelector('.windCard')
  const windTitle = document.createElement('p')
  windTitle.classList.add('.windTitle')
  windTitle.textContent = 'WIND'
  const windIcon = document.createElement('p')
  windIcon.classList.add('.windIcon')
  windIcon.textContent = '🌬️'
  const windSpeedElement = document.createElement('p')
  windSpeedElement.classList.add('.windSpeedElement')
  windSpeedElement.textContent = ` Speed: ${data.current.wind_kph} kph / ${data.current.wind_mph} mph`
  const windDirectionElement = document.createElement('p')
  windDirectionElement.classList.add('.windDirectionElement')
  windDirectionElement.textContent = `Direction: ${data.current.wind_dir}`
  
  windCard.appendChild(windTitle)
  windCard.appendChild(windIcon)
  windCard.appendChild(windSpeedElement)
  windCard.appendChild(windDirectionElement)

}
window.onload = forecast('manzanillo, col')