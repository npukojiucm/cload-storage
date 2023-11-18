import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./components/SignupForm/SignupPage";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/LoginForm.tsx/LoginForm";

// import ru from '../node_modules/moment/locale/ru.js';
import moment from 'moment-with-locales-es6';

moment.locale('ru')
console.log(moment.locale());


function App() {

  return (
    <>
      <NavBar children={<LoginForm />} />

      <Routes>
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
