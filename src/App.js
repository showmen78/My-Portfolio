
import Navbar from "./component/navbar";
import Intro from "./component/intro";
import About from "./component/about";
import Services from "./component/services";
import Testimonials from "./component/testimonial";
import Contact from "./component/contact";
import Footer from "./component/footer"

function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
