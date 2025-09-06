import GlobalStyles from "components/Styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "pages/EmployeeApp/Home/Home";
import ContactUsForm from "pages/EmployeeApp/ContactUs/ContactUs";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import About from "pages/EmployeeApp/About/About";
import Clients from "pages/EmployeeApp/Clients/Clients";
import Facebook from "pages/EmployeeApp/Clients/Facebook/Facebook";
import Instagram from "pages/EmployeeApp/Clients/Instagram/Instagram";
import LinkedIn from "pages/EmployeeApp/Clients/LinkedIn/LinkedIn";

// Components
import Layout from "components/Layout/Layout";

// //Lessons
// import Lesson_06 from "lessons/Lesson_06/Lesson_06";
// import Lesson_07 from "lessons/Lesson_07/Lesson_07";
// import Lesson_08 from "lessons/Lesson_08/Lesson_08";
// import Lesson_09 from "lessons/Lesson_09/Lesson_09";
// import Lesson_10 from "lessons/Lesson_10/Lesson_10";
// import Lesson_11 from "lessons/Lesson_11/Lesson_11";
// import Lesson_12 from "lessons/Lesson_12/Lesson_12";

// Homeworks
// import Homework_06 from "homeworks/Homework_06/Homework_06";
// import Homework_07 from "homeworks/Homework_07/Homework_07";
// import Homework_08 from "homeworks/Homework_08/Homework_08";
// import Homework_09 from "homeworks/Homework_09/Homework_09";
// import Homework_10 from "homeworks/Homework_10/Homework_10";
// import Homework_11 from "homeworks/Homework_11/Homework_11";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUsForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/facebook" element={<Facebook />} />
          <Route path="/clients/instagram" element={<Instagram />} />
          <Route path="/clients/linkedIn" element={<LinkedIn />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>

      {/* Lessons */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Lesson_10 /> */}
      {/* <Lesson_11 /> */}
      {/* <Lesson_12 /> */}

      {/* Homeworks */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_08 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_10 /> */}
      {/* <Homework_11 /> */}
    </BrowserRouter>
  );
}

export default App;
