import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>hello</div>} />
            <Route path="/about" element={<div>About Page!</div>}/>
            <Route path="/contact" element={<div>Contact</div>}/>
          </Routes>          
        </BrowserRouter>
    </>
  )
}

export default App;