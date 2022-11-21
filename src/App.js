import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Global";
import { Home } from "./Pages/Home";


function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
