export interface CapitalCity {
  name: string
}

export type Weather = {
  cod: string
  message: number
  cnt: number
  list: {
    dt: number
    main: {
      temp: number
      temp_min: number
      temp_max: number
      pressure: number
      sea_level: number
      grnd_level: number
      humidity: number
      temp_kf: number
      feels_like: number
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
      icon: string
    }[]
    clouds: {
      all: number
    }
    wind: {
      speed: number
      deg: number
    }
    sys: {
      pod: string
    }
    dt_txt: string
    rain?: undefined
    snow?: undefined
  }[]
  city: {
    id: number
    name: string
    coord: {
      lat: number
      lon: number
    }
    country: string
  }
}
