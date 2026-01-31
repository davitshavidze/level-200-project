import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullPage from "./FullPage";
import Home from "./Components/Pages/Home/Home";;
import Courses from "./Components/Pages/Courses/Courses";
import Register from "./Components/Pages/Registration/Register";
import Autorization from "./Components/Pages/Login/Autorization";
import UserPage from "./Components/Pages/User/UserPage";
import ContactUs from "./Components/Pages/Contact/ContactUs";
import Mentors from "./Components/Pages/Mentors/Mentors";
import Gallery from "./Components/Pages/Gallery/Gallery";
import FAQ from "./Components/Pages/FAQ/FAQ";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<FullPage />}>
            <Route element={<Home />} index></Route>
            <Route element={<Courses />} path="Courses"></Route>
            <Route element={<Register />} path="Register"></Route>
            <Route element={<Autorization />} path="Login"></Route>
            <Route element={<UserPage />} path="UserPage"></Route>
            <Route element={<ContactUs />} path="Contact"></Route>
            <Route element={<Mentors />} path="Mentors"></Route>
            <Route element={<Gallery />} path="Gallery"></Route>
            <Route element={<FAQ />} path="FAQ"></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
