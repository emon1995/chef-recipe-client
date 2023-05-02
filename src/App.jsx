import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="mx-4 lg:mx-12">
        <Header></Header>
      </div>
      <div className="min-h-[calc(100vh-348px)] mt-12 mx-4 lg:mx-16">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
