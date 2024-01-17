import {
  FaCloud,
  FaCloudMoon,
  FaCloudMoonRain,
  FaCloudRain,
  FaCloudSun,
  FaCloudSunRain,
  FaSun,
  FaMoon,
  FaSnowflake,
  FaEyeSlash,
} from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { WeatherIconCode } from "../../utils/types";

interface WeatherIconProps {
  iconCode: WeatherIconCode;
  className?: string;
  style?: React.CSSProperties;
}

const iconMap: { [key in WeatherIconCode]: React.ComponentType<any> } = {
  "01d": FaSun,
  "01n": FaMoon,
  "02d": FaCloudSun,
  "02n": FaCloudMoon,
  "03d": FaCloud,
  "03n": FaCloud,
  "04d": FaCloud,
  "04n": FaCloud,
  "09d": FaCloudRain,
  "09n": FaCloudRain,
  "10d": FaCloudSunRain,
  "10n": FaCloudMoonRain,
  "11d": FaBoltLightning,
  "11n": FaBoltLightning,
  "13d": FaSnowflake,
  "13n": FaSnowflake,
  "50d": FaEyeSlash,
  "50n": FaEyeSlash,
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconCode, className, style }) => {
  const IconComponent = iconMap[iconCode] || FaSun;
  return <IconComponent className={className} style={style} />;
};

export default WeatherIcon;