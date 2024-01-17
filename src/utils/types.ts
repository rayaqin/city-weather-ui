export type CapitalCity = {
  name: string
}

export type CapitalData = {
  capital: string
  [key: string]: string
}

export type WeatherIconCode =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "11d"
  | "11n"
  | "13d"
  | "13n"
  | "50d"
  | "50n"

export type WeatherData = {
  coord: {
    lon: number
    lat: number
  }
  weather: {
    id: number
    main:
      | "Thunderstorm"
      | "Drizzle"
      | "Rain"
      | "Snow"
      | "Clear"
      | "Clouds"
      | "Haze"
      | "Mist"
    description: string
    icon: WeatherIconCode
  }[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export type ThemeType = "dark" | "light"
