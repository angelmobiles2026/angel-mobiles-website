import "./App.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import Review from "./components/Review";
import Home from "./components/Home";
import Products from "./components/Products";
// import Maintenance from "./components/Maintenance";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Home />
      <About />
      <Products />
      <Service />
      <Review />
      <Footer />
      {/* <Maintenance /> */}
    </>
  );
}

export default App;
