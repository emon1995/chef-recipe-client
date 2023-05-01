import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="mx-12">
        <Header></Header>
      </div>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
