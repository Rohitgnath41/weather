// import { Route, Routes } from "react-router-dom"; 
// import Navbar from "./components/Navbar";
// import HomePage from "./components/HomePage"; 
// import AboutPage from "./components/AboutPage";
// import ContactPage from "./components/contact"; // Ensure the case matches your file
// import './App.css'; // Global styles
// function App() {
//   return (
//     <>
//       <Navbar />
// <div className="app-background"> 
//        <Routes>
//         <Route path="/Home" element={<HomePage />} />
//         <Route path="/" element={<HomePage />} />
//        <Route path="/about" element={<AboutPage />} />
//          <Route path="/contact" element={<ContactPage />} />
//        </Routes>
//     </>
//   );
// }

// export default App;
import { Route, Routes } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage"; 
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/contact"; // Ensure the case matches your file
import './App.css'; // Global styles

function App() {
  return (
    <>
      <Navbar />
      <div className="app-background"> 
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div> {/* Closing div for app-background */}
    </>
  );
}

export default App;

