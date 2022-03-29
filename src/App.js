// third party import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// local party import
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";
import { Home } from "./components/main/home/Home";
import { AboutUs } from "./components/main/aboutus/AboutUs";
import { Features } from "./components/main/features/Features";
import { HomeLayout, AuthLayout, LoggedInPageLayout } from "./components/layouts";
import {SignUpOtp} from "./components/organism/signUp/SignUpOtp"
import { SetPassword } from "./components/organism/signUp/SetPassword";
import { ForgatePasssword } from "./components/organism/forgetPassword/ForgatePassword";

import { ForgatePassswordOtp } from "./components/organism/forgetPassword/ForgatePasswordOtp";
import { ForgetResetPassword } from "./components/organism/forgetPassword/ForgetResetPassword";


import {
  INDEX_ROUTE,
  HOME_ROUTE,
  ABOUT_US_ROUTE,
  FEATURES_ROUTE,
  AUTH_ROUTE,
  SIGN_UP_ROUTE,
  LOGIN_ROUTE,
  OTP_ROUTE,
  SET_PASSWORD_ROUTE,
  LOGGED_IN_PAGE,
  FORGATE_PASSWORD,
  FORGATE_PASSWORD_OTP,
  FORGET_PASSWORD_RESET
} from './components/constants/routes'


console.log(FORGATE_PASSWORD_OTP)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={INDEX_ROUTE} element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path={FEATURES_ROUTE} element={<Features />} />
            <Route path={ABOUT_US_ROUTE} element={<AboutUs />} />
          </Route>
          <Route path={AUTH_ROUTE} element={<AuthLayout />}>
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={SIGN_UP_ROUTE} element={<SignUp />} />
            <Route path={OTP_ROUTE} element={<SignUpOtp />} />
            <Route path={SET_PASSWORD_ROUTE} element={<SetPassword/>} />
            <Route path={FORGATE_PASSWORD} element={<ForgatePasssword/>}/>
            <Route path={FORGATE_PASSWORD_OTP} element={<ForgatePassswordOtp/>}/>
            <Route path={FORGET_PASSWORD_RESET} element={<ForgetResetPassword/>}/>
          </Route>
          <Route path={LOGGED_IN_PAGE} element={<LoggedInPageLayout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
