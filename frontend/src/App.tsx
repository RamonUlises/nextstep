import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Error404 } from "./Pages/404";


function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element = {<Error404/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
