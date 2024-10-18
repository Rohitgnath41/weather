// import React, { useState } from 'react';
// import { TextField, Button, Typography, Card, CardContent, Container, Box } from '@mui/material';
// import backgroundImage from '../assets/weather.png'; // Ensure the path is correct
// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState('');

//   const API_KEY = '2ef9c0864689b6c9e197d7a8a2fc5ff2'; // Replace with your OpenWeatherMap API key

//   const fetchWeather = async () => {
//     if (!city) return;

//     try {
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//       if (!response.ok) throw new Error('City not found');
//       const data = await response.json();
//       setWeatherData(data);
//       setError('');
//     } catch (err) {
//       setError(err.message);
//       setWeatherData(null);
//     }
//   };

//   return (
//     <Container 
//       maxWidth="sm" 
//       sx={{ 
//         backgroundImage: `url(${backgroundImage})`, // Correct usage of template literals
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '80vh',
//         padding: '4px',
//         borderRadius: '100px',
//         boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: 'white',
        
//       }}
//     >
//       <Typography variant="h4" gutterBottom     color='black'>
//       ## MUI-Weather Forecast ##
//       </Typography>
//       <TextField
//        placeholder='*City or Country*  '
//        color='red'
//         variant="outlined"
//         fullWidth
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         sx={{ mb: 2, backgroundColor: 'white' }}
//       />
//       <Button variant="contained" color="primary" onClick={fetchWeather} sx={{ mt: 2 }}>
//         Get Weather
//       </Button>

//       {error && <Typography color="error" mt={2}>{error}</Typography>}

//       {weatherData && (
//         <Card sx={{ mt: 3, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', padding: '20px' }}>
//           <CardContent>
//             <Box display="flex" alignItems="center">
//               <img 
//                 src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
//                 alt={weatherData.weather[0].description} 
//                 style={{ width: '50px', height: '50px', marginRight: '10px' }}
//               />
//               <Typography variant="h5">
//                 {weatherData.name}, {weatherData.sys.country}
//               </Typography>
//             </Box>
//             <Typography variant="body1">Temperature: {weatherData.main.temp.toFixed(2)} °C</Typography>
//             <Typography variant="body1">Weather: {weatherData.weather[0].description}</Typography>
//             <Typography variant="body1">Humidity: {weatherData.main.humidity} %</Typography>
//             <Typography variant="body1">Wind Speed: {weatherData.wind.speed.toFixed(2)} m/s</Typography>
//           </CardContent>
//         </Card>
//       )}
//     </Container>
//   );
// };

// export default Weather;
import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent, Container, Box } from '@mui/material';
import backgroundImage from '../assets/weather.png'; // Ensure the path is correct

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '2ef9c0864689b6c9e197d7a8a2fc5ff2'; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeatherData(data);
      setError('');
      setCity(''); // Clear the input field after fetching the weather
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        backgroundImage: `url(${backgroundImage})`, // Correct usage of template literals
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        padding: '4px',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h4" gutterBottom color='black'>
        ## MUI-Weather Forecast ##
      </Typography>
      <TextField
        placeholder='*City or Country*'
        variant="outlined"
        fullWidth
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ mb: 2, backgroundColor: 'white' }}
      />
      <Button variant="contained" color="primary" onClick={fetchWeather} sx={{ mt: 2 }}>
        Get Weather
      </Button>

      {error && <Typography color="error" mt={2}>{error}</Typography>}

      {weatherData && (
        <Card sx={{ mt: 3, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', padding: '20px' }}>
          <CardContent>
            <Box display="flex" alignItems="center">
              <img 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                alt={weatherData.weather[0].description} 
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              <Typography variant="h5">
                {weatherData.name}, {weatherData.sys.country}
              </Typography>
            </Box>
            <Typography variant="body1">Temperature: {weatherData.main.temp.toFixed(2)} °C</Typography>
            <Typography variant="body1">Weather: {weatherData.weather[0].description}</Typography>
            <Typography variant="body1">Humidity: {weatherData.main.humidity} %</Typography>
            <Typography variant="body1">Wind Speed: {weatherData.wind.speed.toFixed(2)} m/s</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Weather;
