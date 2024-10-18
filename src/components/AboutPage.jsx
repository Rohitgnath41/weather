// // import React from 'react';
// import { Container, Typography, Card, CardContent } from '@mui/material';
// import './AboutPage.css'; 

// function AboutPage() {
//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Card elevation={3} sx={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
//         <CardContent>
//           <Typography variant="h4" gutterBottom align="center">
//             About Us
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Welcome to [Your Website Name], your trusted source for accurate and timely weather forecasts. We are dedicated to providing you with the most reliable weather information, helping you plan your day and stay safe in all conditions.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Our team of meteorologists uses advanced technology and data analysis to bring you the latest updates on weather patterns, including forecasts for rain, snow, wind, and temperature changes. Whether you're planning a trip, organizing an outdoor event, or just curious about the weather, we have you covered.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             At [Your Website Name], we believe that staying informed about the weather is essential for everyone. Our user-friendly platform is designed to deliver comprehensive weather insights at your fingertips, ensuring that you're always prepared, no matter the forecast.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Thank you for choosing us as your go-to weather resource. We are committed to enhancing your experience with the most accurate and accessible weather information available.
//           </Typography>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }

// export default AboutPage;
// import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import './AboutPage.css'; 

function AboutPage() {
  return (
    <div className="about-container"> {/* Use the CSS class here for styling */}
      <Card elevation={3} sx={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.9)', margin: '0 auto' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to MUI, your trusted source for accurate and timely weather forecasts. We are dedicated to providing you with the most reliable weather information, helping you plan your day and stay safe in all conditions.
          </Typography>
          <Typography variant="body1" paragraph>
            Our team of meteorologists uses advanced technology and data analysis to bring you the latest updates on weather patterns, including forecasts for rain, snow, wind, and temperature changes. Whether you're planning a trip, organizing an outdoor event, or just curious about the weather, we have you covered.
          </Typography>
          <Typography variant="body1" paragraph>
            At MUI, we believe that staying informed about the weather is essential for everyone. Our user-friendly platform is designed to deliver comprehensive weather insights at your fingertips, ensuring that you're always prepared, no matter the forecast.
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for choosing us as your go-to weather resource. We are committed to enhancing your experience with the most accurate and accessible weather information available.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default AboutPage;
