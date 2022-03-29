import { Link } from "react-router-dom";

const ContinueButtonOtp = () => {
  return (
    <>
      <Link to="/auth/set-password">
        <button className="button">Continue</button>
      </Link>
    </>
  );
};

export { ContinueButtonOtp };
