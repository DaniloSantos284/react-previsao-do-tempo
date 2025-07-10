import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'

function App() {
  const [weather, setweather] = useState()
  const inputRef = useRef()

async  function searchCity() {
    const city = inputRef.current.value
    const key = "07007ad438e673cc6df91c24945bea28"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br`

    const apiInfo = await axios.get(url)
    setweather(apiInfo.data)
  }

  return (
   <div>
    <h1>Danilo Santos Previsão do tempo</h1>
    <input type="text" placeholder='Digite o nome da cidade'/>
    <button onClick={searchCity}>Buscar</button>

    {weather && <WeatherInformations weather={weather} />}
   </div>
  )
}

export default App