import { Outlet } from "react-router-dom";

import { Logo } from "../common/logo/Logo";

export default function AuthLayout() {
  return (
    <>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="auth">
        <Outlet />
      </div>
    </>
  );
}
