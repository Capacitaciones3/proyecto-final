import { fetchContent } from "../utils/fetch";

export const getDashboard = async () => {
  try {
    return await fetchContent("/dashboard");
  } catch (error) {
    throw new Error("[Dashboard service error]: " + error);
  }
};

export const getApiClima = async () => {
  try {
    const res = await fetch('http://api.weatherapi.com/v1/current.json?key=27b0dc2fbf7841aa903234159231704&q=Buenos%Aires&aqi=no&lang=es', {
      method: 'GET',
      headers: {    
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch(error) {
    console.error(error);
  }
}


/* header:
"Transfer-Encoding": "chunked",
        "Connection": "keep-alive",
        "Vary": "Accept-Encoding",
        "CDN-PullZone": "93447",
        "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
        "CDN-RequestCountryCode": "GB",
        "CDN-ProxyVer": "1.03",
        "CDN-RequestPullSuccess": "True",
        "CDN-RequestPullCode": "200",
        "CDN-CachedAt": "04/17/2023 23:46:30",
        "CDN-EdgeStorageId": "1074",
        "CDN-Status": "200",
        "CDN-RequestId": "6e6d9bd97ae95d2bca406e0e725a311d",
        "CDN-Cache": "MISS",
        "Cache-Control": "public, max-age=180",
        "Date": "Mon, 17 Apr 2023 23:46:30 GMT",
        "Server": "BunnyCDN-FR1-951" 
        
body:  "location": {
            "name": "Buenos Aires",
            "region": "Distrito Federal",
            "country": "Argentina",
            "lat": -34.59,
            "lon": -58.67,
            "tz_id": "America/Argentina/Buenos_Aires",
            "localtime_epoch": 1681775190,
            "localtime": "2023-04-17 20:46"
        },
        "current": {
            "last_updated_epoch": 1681775100,
            "last_updated": "2023-04-17 20:45",
            "temp_c": 15.0,
            "temp_f": 59.0,
            "is_day": 0,
            "condition": {
                "text": "Clear",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                "code": 1000
            },
            "wind_mph": 6.9,
            "wind_kph": 11.2,
            "wind_degree": 20,
            "wind_dir": "NNE",
            "pressure_mb": 1007.0,
            "pressure_in": 29.74,
            "precip_mm": 0.0,
            "precip_in": 0.0,
            "humidity": 77,
            "cloud": 0,
            "feelslike_c": 15.4,
            "feelslike_f": 59.8,
            "vis_km": 10.0,
            "vis_miles": 6.0,
            "uv": 1.0,
            "gust_mph": 4.9,
            "gust_kph": 7.9,
            "air_quality": {
                "co": 2670.300048828125,
                "no2": 58.29999923706055,
                "o3": 0.0,
                "so2": 7.0,
                "pm2_5": 26.100000381469727,
                "pm10": 30.600000381469727,
                "us-epa-index": 2,
                "gb-defra-index": 3
*/