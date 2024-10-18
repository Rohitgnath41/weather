// import React, { useState } from "react";
// import { TextField, Button, Typography, Container } from "@mui/material";
// import './ContactPage.css'; 

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, message } = formData;

//     if (!name || !email || !message) {
//       alert("All fields are required!");
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }
    
//     if (!/^[A-Za-z\s]{2,}$/.test(name)) {
//       alert("Please enter a valid name (at least 2 characters long, letters only).");
//       return;
//     }

//     alert("Form submitted successfully!");
//     console.log(formData);
//     setFormData({ name: "", email: "", message: "" }); 
//   };

//   return (
//     <Container className="contact-container" maxWidth="sm">
//       <Typography variant="h4" gutterBottom>
//         Contact Us
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Name"
//           name="name"
//           placeholder="Enter your name"
//           value={formData.name}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="Email"
//           name="email"
//           type="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="Message"
//           name="message"
//           placeholder="Enter your message"
//           value={formData.message}
//           onChange={handleChange}
//           fullWidth
//           required
//           multiline
//           rows={4}
//           margin="normal"
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>
//     </Container>
//   );
// }

// export default Contact;
// import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import './ContactPage.css';
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    try {
      if (!name || !email || !message) {
        throw new Error("All fields are required!");
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        throw new Error("Please enter a valid email address.");
      }
      
      if (!/^[A-Za-z\s]{2,}$/.test(name)) {
        throw new Error("Please enter a valid name (at least 2 characters long, letters only).");
      }

      // Simulate form submission (you can replace this with an actual API call)
      // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      alert("Form submitted successfully!");
      console.log(formData);
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container className="contact-container" maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={4}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Contact;
