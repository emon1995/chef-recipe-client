import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const navigation = useNavigation();

  return (
    <>
      <div className="mx-2 lg:mx-12">
        <Header></Header>
      </div>
      <div className="min-h-[calc(100vh-348px)] mt-12 mx-4 lg:mx-16">
        {navigation.state === "loading" ? <Spinner /> : <Outlet />}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
