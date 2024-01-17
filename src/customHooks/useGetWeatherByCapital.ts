import { useEffect, useState } from "react"
import { CapitalCity, WeatherData } from "../utils/types"

const geolocationAPIURLBase: string = import.meta.env.VITE_GEOLOCATION_API_URL
const weatherAPIURLBase: string = import.meta.env.VITE_WEATHER_API_URL
const weatherAPIKey: string = import.meta.env.VITE_WEATHER_API_KEY

const useGetWeatherByCapital = (capital: CapitalCity["name"]) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const geolocationApiURL = `${geolocationAPIURLBase}?q=${capital}&limit=1&appid=${weatherAPIKey}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(geolocationApiURL)

        if (!response.ok) {
          throw new Error("Failed to fetch geolocation data")
        }

        const geoData = await response.json()

        const weatherAPIUrl = `${weatherAPIURLBase}?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${weatherAPIKey}&units=metric`

        const weatherResponse = await fetch(weatherAPIUrl)

        if (!weatherResponse.ok) {
          throw new Error("Failed to fetch weather data")
        }

        const weatherData = await weatherResponse.json()

        setWeatherData(weatherData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching weather data:", error)
        setError(error as Error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { error, weatherData, loading }
}

export default useGetWeatherByCapital
