import { Outlet } from "react-router-dom";
import { LoggedInPage } from "../main/loggedInPage/LoggedIn";

export default function LoggedInPageLayout() {
  return (
    <>
      <div className="logo-container">
        <LoggedInPage />
      </div>
      <div className="auth">
        <Outlet />
      </div>
    </>
  );
}
