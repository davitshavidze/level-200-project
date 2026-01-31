import { Outlet } from "react-router-dom";
import Header from "./Components/Big Component/Header";
import Footer from "./Components/Big Component/Footer";

function FullPage() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default FullPage

