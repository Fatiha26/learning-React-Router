import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import './app.css'

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<Error />}/>
          </Routes>          

          {/* <Routes>
            <Route path="/" element={<Home /> }>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<Error />}/>
            </Route>
          </Routes>  NESTED ROUTING */}
        </BrowserRouter>
    </>
  )
}

export default App;