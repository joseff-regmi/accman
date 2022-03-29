import { Link } from "react-router-dom";

const FindAccountButton = () => {
  return (
    <>
      <Link to="/auth/forget-password/forgate-password-otp">
        <button className="button">Find Account</button>
      </Link>
    </>
  );
};

export { FindAccountButton };
