import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import { TiThMenu } from "react-icons/ti";
import "bootstrap/dist/css/bootstrap.min.css";
import Pages from "./components/pages";

function App() {
  const [navShow, setNavShow] = useState(false);
  return (
    <div className="App">
      <div className="d-flex p-3">
        <h1 className="flex-grow-1 text-center">다다람지의 공간</h1>
        <TiThMenu
          className="ms-auto fs-1"
          onClick={() => {
            setNavShow(true);
          }}
        />
      </div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/intro" element={<Pages />} />
          <Route path="/diary/:category" element={<Pages />} />
          <Route path="/board/:category" element={<Pages />} />
        </Routes>
        <Nav navShow={navShow} setNavShow={setNavShow} />
      </BrowserRouter>
    </div>
  );
}

export default App;
