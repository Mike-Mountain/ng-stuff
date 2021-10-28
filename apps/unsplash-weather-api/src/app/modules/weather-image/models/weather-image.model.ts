export class Weather {
  description: string;
  main: string;
  humidity: number;
  visibility: number;
  windSpeed: number;
  cloudCoverage: number;
  name: string;

  constructor(options: any) {
    this.description = options.weather[0].description;
    this.main = options.weather[0].main;
    this.humidity = options.main.humidity;
    this.visibility = options.visibility;
    this.windSpeed = options.wind.speed;
    this.cloudCoverage = options.clouds.all;
    this.name = options.name;
  }
}

export class UnsplashImage {
  id: string;
  width: number;
  height: number;
  color: string;
  description: string;
  url: string;

  constructor(options: any) {
    this.id = options.id;
    this.width = options.width;
    this.height = options.height;
    this.color = options.color;
    this.description = options.description;
    this.url = options.urls.regular;
  }
}

export class UnsplashWeatherImage {
  images: UnsplashImage[];
  weather: Weather;
  searchQuery: string;

  constructor(options: any, searchQuery: string) {
    this.images = options.images.map(image => new UnsplashImage(image));
    this.weather = new Weather(options.weather);
    this.searchQuery = searchQuery;
  }
}
