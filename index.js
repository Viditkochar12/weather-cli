import axios from "axios";

// Read city from command line
const city = process.argv[2];

if (!city) {
  console.log("❌ Please provide a city name");
  console.log('Example: node index.js "London"');
  process.exit(1);
}

// Free Weather API (no key needed)
const URL = `https://wttr.in/${city}?format=j1`;

async function getWeather() {
  try {
    const response = await axios.get(URL);

    const temp = response.data.current_condition[0].temp_C;
    const desc = response.data.current_condition[0].weatherDesc[0].value;

    console.log(`Weather in ${city}: ${temp}°C, ${desc}`);
  } catch (error) {
    console.log("❌ City not found or API error");
  }
}

getWeather();
