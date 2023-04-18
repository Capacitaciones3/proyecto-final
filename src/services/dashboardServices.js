

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
  