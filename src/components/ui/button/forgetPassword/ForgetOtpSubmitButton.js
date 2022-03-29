import { Link } from "react-router-dom";

const ForgetOtpSubmitButton = () => {
  return (
    <>
      <Link to="/auth/forget-password/forget-password-reset">
        <button className="button">Continue</button>
      </Link>
    </>
  );
};

export { ForgetOtpSubmitButton };
